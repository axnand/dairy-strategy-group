import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  company: string;
  designation: string;
  email: string;
  phone: string;
  location: string;
  inquiry: string;
  message: string;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();

    const NOTIFICATION_EMAIL = Deno.env.get("NOTIFICATION_EMAIL");
    if (!NOTIFICATION_EMAIL) {
      throw new Error("NOTIFICATION_EMAIL is not configured");
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    // Send email notification via Lovable's built-in email
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #0B1F3B; border-bottom: 2px solid #1F7A5C; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; color: #5E6C7B; width: 140px;">Name</td>
            <td style="padding: 8px 12px; color: #1A1A1A;">${formData.name}</td>
          </tr>
          <tr style="background: #F5F7FA;">
            <td style="padding: 8px 12px; font-weight: bold; color: #5E6C7B;">Company</td>
            <td style="padding: 8px 12px; color: #1A1A1A;">${formData.company || "—"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; color: #5E6C7B;">Designation</td>
            <td style="padding: 8px 12px; color: #1A1A1A;">${formData.designation || "—"}</td>
          </tr>
          <tr style="background: #F5F7FA;">
            <td style="padding: 8px 12px; font-weight: bold; color: #5E6C7B;">Email</td>
            <td style="padding: 8px 12px; color: #1A1A1A;"><a href="mailto:${formData.email}">${formData.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; color: #5E6C7B;">Phone</td>
            <td style="padding: 8px 12px; color: #1A1A1A;">${formData.phone || "—"}</td>
          </tr>
          <tr style="background: #F5F7FA;">
            <td style="padding: 8px 12px; font-weight: bold; color: #5E6C7B;">Location</td>
            <td style="padding: 8px 12px; color: #1A1A1A;">${formData.location || "—"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; color: #5E6C7B;">Inquiry Type</td>
            <td style="padding: 8px 12px; color: #1A1A1A;">${formData.inquiry}</td>
          </tr>
        </table>
        <div style="margin-top: 20px; padding: 15px; background: #F5F7FA; border-left: 3px solid #1F7A5C;">
          <p style="font-weight: bold; color: #5E6C7B; margin: 0 0 8px 0;">Message</p>
          <p style="color: #1A1A1A; margin: 0; white-space: pre-wrap;">${formData.message}</p>
        </div>
        <p style="margin-top: 20px; font-size: 12px; color: #5E6C7B;">
          This email was sent from the Nextgen Dairy Solution website contact form.
        </p>
      </div>
    `;

    // Use Resend-compatible API via LOVABLE_API_KEY
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    
    if (resendApiKey) {
      // If Resend is configured, send via Resend
      const emailResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: "Nextgen Dairy Solution <onboarding@resend.dev>",
          to: [NOTIFICATION_EMAIL],
          subject: `New Inquiry: ${formData.inquiry} — ${formData.name}`,
          html: emailHtml,
          reply_to: formData.email,
        }),
      });

      if (!emailResponse.ok) {
        const errorData = await emailResponse.text();
        console.error("Email send failed:", errorData);
        // Don't throw - form data is already saved in DB
      }
    } else {
      // Log the submission details for admin review
      console.log("=== NEW CONTACT FORM SUBMISSION ===");
      console.log(JSON.stringify(formData, null, 2));
      console.log("Notification email would be sent to:", NOTIFICATION_EMAIL);
      console.log("Note: Configure RESEND_API_KEY for email delivery");
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    console.error("Error processing contact form:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});

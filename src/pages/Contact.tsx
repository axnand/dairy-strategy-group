import { useState } from "react";
import PageHero from "@/components/PageHero";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const inquiryOptions = [
  "New Plant Setup",
  "Product Development",
  "Technology Upgrade",
  "Sustainability Consulting",
  "Milk Sourcing",
  "Coconut Processing",
  "Other",
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    designation: "",
    email: "",
    phone: "",
    location: "",
    inquiry: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Save to database
      const { error: dbError } = await supabase
        .from("contact_submissions")
        .insert({
          name: form.name.trim(),
          company: form.company.trim() || null,
          designation: form.designation.trim() || null,
          email: form.email.trim(),
          phone: form.phone.trim() || null,
          location: form.location.trim() || null,
          inquiry: form.inquiry,
          message: form.message.trim(),
        });

      if (dbError) {
        console.error("Database error:", dbError);
        throw new Error("Failed to save your submission");
      }

      // 2. Send email notification via Web3Forms
      try {
        const emailRes = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            access_key: "YOUR_WEB3FORMS_ACCESS_KEY",
            subject: `New Contact Inquiry: ${form.inquiry}`,
            from_name: "Nextgen Dairy Solution Website",
            name: form.name.trim(),
            email: form.email.trim(),
            company: form.company.trim() || "N/A",
            designation: form.designation.trim() || "N/A",
            phone: form.phone.trim() || "N/A",
            location: form.location.trim() || "N/A",
            inquiry: form.inquiry,
            message: form.message.trim(),
          }),
        });
        const emailData = await emailRes.json();
        if (!emailData.success) {
          console.error("Email notification error:", emailData);
        }
      } catch (emailErr) {
        console.error("Email notification error:", emailErr);
        // Don't throw — form data is already saved in Supabase
      }

      toast({
        title: "Thank you",
        description: "Your message has been received. We'll be in touch shortly.",
      });

      setForm({ name: "", company: "", designation: "", email: "", phone: "", location: "", inquiry: "", message: "" });
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Submission failed",
        description: "Something went wrong. Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full border border-border bg-card rounded px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition";

  return (
    <>
      <PageHero
        title="Contact Nextgen Dairy Solution"
        subtitle="Whether you are planning a new dairy plant, upgrading technology, improving milk sourcing or reducing carbon emissions — we are here to support."
      />

      <section className="py-16 lg:py-24">
        <div className="container-narrow max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name" required className={inputClass} />
              <input name="company" value={form.company} onChange={handleChange} placeholder="Company Name" className={inputClass} />
              <input name="designation" value={form.designation} onChange={handleChange} placeholder="Designation" className={inputClass} />
              <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email Address" required className={inputClass} />
              <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" className={inputClass} />
              <input name="location" value={form.location} onChange={handleChange} placeholder="Location" className={inputClass} />
            </div>

            <select name="inquiry" value={form.inquiry} onChange={handleChange} required className={inputClass}>
              <option value="">Nature of Inquiry</option>
              {inquiryOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              required
              className={inputClass + " resize-none"}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground font-semibold text-sm tracking-wide rounded transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Schedule a Consultation"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;

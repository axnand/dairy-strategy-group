import { useState } from "react";
import PageHero from "@/components/PageHero";
import { useToast } from "@/hooks/use-toast";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Thank you", description: "Your message has been received. We'll be in touch shortly." });
    setForm({ name: "", company: "", designation: "", email: "", phone: "", location: "", inquiry: "", message: "" });
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
              className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground font-semibold text-sm tracking-wide rounded transition-opacity hover:opacity-90"
            >
              Schedule a Consultation
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;

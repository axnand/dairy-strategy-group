import { Link } from "react-router-dom";
import { Milk, Factory, Leaf, TreePine, Droplets } from "lucide-react";
import heroImage from "@/assets/hero-dairy-plant.jpg";

const expertise = [
  { icon: Milk, title: "Dairy Products", desc: "From milk powders to whey proteins, caseinate, cheese, ghee and nutrition products." },
  { icon: Factory, title: "Dairy Technology", desc: "Spray drying, evaporation, UHT, retort systems, dry mix facility design and plant readiness." },
  { icon: Droplets, title: "Fresh Milk Sourcing", desc: "AB/AT-free milk systems, A2 milk projects, organic milk supply chain." },
  { icon: Leaf, title: "Coconut Processing", desc: "Coconut cream and coconut milk powder processing & commercialization." },
  { icon: TreePine, title: "Sustainability & Carbon", desc: "Carbon reduction strategies for dairy plants and emission control consulting." },
];

const whoWeHelp = [
  "Dairy manufacturers",
  "Milk processors",
  "Exporters",
  "Nutrition product companies",
  "Plant investors",
  "Private equity investing in dairy",
  "Coconut milk processors",
  "Greenfield & brownfield dairy projects",
];

const whyUs = [
  "40+ years hands-on dairy manufacturing experience",
  "30 years in Nestlé India (Operations, Technical & Projects)",
  "Deep knowledge of Indian dairy ecosystem",
  "Regulatory understanding (FSSAI, export standards)",
  "Practical, implementable solutions — not theory",
];

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative container-narrow py-24 lg:py-36">
          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl mb-6 animate-fade-in-up">
            Transforming Dairy Excellence Through Experience, Technology &amp; Sustainability
          </h1>
          <p className="text-lg lg:text-xl opacity-80 max-w-2xl leading-relaxed mb-10 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            40+ years of leadership in India's dairy industry. 30 years with Nestlé. Now helping dairy businesses scale, modernize and future-proof operations.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Link
              to="/contact"
              className="inline-flex items-center px-7 py-3 bg-accent text-accent-foreground font-semibold text-sm tracking-wide rounded transition-opacity hover:opacity-90"
            >
              Book a Consultation
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-7 py-3 border border-primary-foreground/40 text-primary-foreground font-semibold text-sm tracking-wide rounded transition-colors hover:bg-primary-foreground/10"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-16 lg:py-24">
        <div className="container-narrow">
          <h2 className="font-heading text-2xl lg:text-4xl font-bold text-primary mb-10">Who We Help</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whoWeHelp.map((item) => (
              <div key={item} className="bg-card border border-border rounded p-5 text-sm font-medium text-foreground">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container-narrow section-divider" />

      {/* Core Expertise */}
      <section className="py-16 lg:py-24">
        <div className="container-narrow">
          <h2 className="font-heading text-2xl lg:text-4xl font-bold text-primary mb-12">Core Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((item) => (
              <div key={item.title} className="group">
                <item.icon className="text-accent mb-4" size={32} strokeWidth={1.5} />
                <h3 className="font-heading text-lg font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container-narrow section-divider" />

      {/* Why Work With Us */}
      <section className="py-16 lg:py-24">
        <div className="container-narrow">
          <h2 className="font-heading text-2xl lg:text-4xl font-bold text-primary mb-10">Why Work With Nextgen Solutions</h2>
          <ul className="space-y-4 max-w-2xl">
            {whyUs.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <span className="text-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-16 lg:py-20">
        <div className="container-narrow text-center">
          <h2 className="font-heading text-2xl lg:text-3xl font-bold mb-4">Ready to Elevate Your Dairy Operations?</h2>
          <p className="opacity-80 mb-8 max-w-xl mx-auto">Let's discuss how our expertise can help your business grow.</p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-accent text-accent-foreground font-semibold text-sm tracking-wide rounded transition-opacity hover:opacity-90"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </>
  );
};

export default Index;

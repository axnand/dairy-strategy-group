import { Link } from "react-router-dom";
import { Milk, Factory, Leaf, TreePine, Droplets, FlaskConical, Lightbulb, PackageSearch } from "lucide-react";
import heroImage from "@/assets/hero-dairy-plant.jpg";

const expertise = [
  { icon: Milk, title: "Dairy Products", desc: "Milk Powder, Dairy Whiteners, Whey Proteins, RTD, Cheese, Lactose, Sweetened Condensed Milk, Nutrition Products." },
  { icon: Factory, title: "Dairy Technology", desc: "Spray drying, evaporation, UHT, retort, dry mix MR1 facility design, dry blending and plant readiness." },
  { icon: Droplets, title: "Fresh Milk Sourcing", desc: "AB/AT-free milk systems, A2 milk projects, organic milk supply chain." },
  { icon: Leaf, title: "Coconut Processing", desc: "Coconut cream and coconut milk powder processing & commercialization." },
  { icon: TreePine, title: "Sustainability & Carbon", desc: "Carbon reduction strategies for dairy plants and emission control consulting." },
  { icon: FlaskConical, title: "Recipe Formulation & Concept Refinement", desc: "We develop and refine recipes for taste, nutrition, stability, and scalability—balancing sensory appeal with operational feasibility and cost targets." },
  { icon: Lightbulb, title: "Innovation Pipeline Development", desc: "We help build structured, sustainable innovation pipelines—prioritizing projects, managing risk, and ensuring a steady flow of market-relevant innovations." },
  { icon: PackageSearch, title: "Sourcing Strategy & Vendor Evaluation", desc: "We design sourcing strategies that improve reliability, quality, and cost efficiency, while evaluating and onboarding the right suppliers for long-term value creation." },
];

const whoWeHelp = [
  { label: "Dairy manufacturers", link: "/services#product-dev" },
  { label: "Milk processors", link: "/services#tech-consulting" },
  { label: "Nutrition product companies", link: "/services#product-dev" },
  { label: "Coconut milk processors", link: "/services#coconut" },
  { label: "Greenfield & brownfield dairy projects", link: "/services#greenfield" },
];

const whyUs = [
  {
    title: "Proven Industry Experience",
    desc: "35 years of hands-on experience in the dairy industry, including work with multinational organizations.",
  },
  {
    title: "Practical Consulting Approach",
    desc: "Focused on real, actionable solutions that improve dairy operations and efficiency.",
  },
  {
    title: "End-to-End Dairy Expertise",
    desc: "Comprehensive understanding of dairy processing, plant operations, and industry systems.",
  },
  {
    title: "Modern Technology Guidance",
    desc: "Helping dairy businesses adopt modern technologies and operational best practices.",
  },
  {
    title: "Growth-Focused Advisory",
    desc: "Strategic insights to support long-term growth, scalability, and sustainable operations.",
  },
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
            Advancing Dairy Excellence Through Experience, Innovation &amp; Sustainability.
          </h1>
          <p className="text-lg lg:text-xl opacity-80 max-w-2xl leading-relaxed mb-10 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            With 35 years of industry experience and extensive exposure to multinational organizations, delivering advisory and consulting services to support dairy businesses in scaling operations, improving efficiency, and implementing modern dairy technologies.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Link
              to="/contact"
              className="inline-flex items-center px-7 py-3 border border-primary-foreground/40 text-primary-foreground font-semibold text-sm tracking-wide rounded transition-colors hover:bg-primary-foreground/10"
            >
              Book a Consultation
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-7 py-3 bg-accent text-accent-foreground font-bold text-sm tracking-wide rounded shadow-lg shadow-accent/30 transition-all hover:brightness-110 hover:shadow-xl hover:shadow-accent/40 ring-2 ring-accent/50"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whoWeHelp.map((item) => (
              <Link
                key={item.label}
                to={item.link}
                className="bg-card border border-border rounded p-5 text-sm font-medium text-foreground hover:border-accent hover:text-accent transition-colors"
              >
                {item.label} →
              </Link>
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
          <h2 className="font-heading text-2xl lg:text-4xl font-bold text-primary mb-10">Why Work With Nextgen Dairy Solution</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {whyUs.map((item) => (
              <div key={item.title} className="border-l-2 border-accent pl-6 py-2">
                <h3 className="font-heading text-base font-semibold text-primary mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
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

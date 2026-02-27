import PageHero from "@/components/PageHero";

interface ServiceSection {
  id: string;
  title: string;
  intro: string;
  subsections?: { heading: string; items: string[] }[];
  items?: string[];
  supportItems?: { heading: string; items: string[] };
}

const services: ServiceSection[] = [
  {
    id: "product-dev",
    title: "1. Dairy Product Development & Commercialization",
    intro: "We assist companies in:",
    items: [
      "Setting up milk powder plants (SMP, WMP, FCMP)",
      "Sweetened condensed milk production",
      "Whey processing (DM90, DWP28, WMP80, WPI)",
      "Caseinate & lactose (food & pharma grade)",
      "Ghee / AMF standardization",
      "Butter & butter milk powder lines",
      "Nutrition product formulation",
    ],
    supportItems: {
      heading: "Support includes:",
      items: [
        "Feasibility study",
        "Equipment selection",
        "Capacity planning",
        "Process optimization",
        "Quality standard setting",
        "Export compliance advisory",
      ],
    },
  },
  {
    id: "tech-consulting",
    title: "2. Dairy Plant Technology Consulting",
    intro: "With extensive experience in large-scale dairy plants, we provide:",
    subsections: [
      {
        heading: "Spray Dryer Consulting",
        items: ["Capacity calculation", "Product quality optimization", "Energy efficiency improvement", "Powder recovery enhancement"],
      },
      {
        heading: "Evaporator Systems",
        items: ["Multi-effect evaporator design review", "Steam optimization", "Fouling reduction strategies"],
      },
      {
        heading: "UHT & Retort Systems",
        items: ["Shelf-stable product development", "Thermal process validation", "Packaging compatibility"],
      },
      {
        heading: "Ion Exchange & Lactose Processing",
        items: ["Demineralized whey production", "Pharma-grade lactose quality control"],
      },
      {
        heading: "Hygienic Dry Mix Facility Design",
        items: ["Layout planning", "Dust control systems", "Contamination prevention", "Food safety compliance"],
      },
      {
        heading: "MR1 Facility Preparedness",
        items: ["Audit readiness", "Documentation system", "Quality control setup"],
      },
    ],
  },
  {
    id: "fresh-milk",
    title: "3. Fresh Milk Sourcing & Quality Systems",
    intro: "We guide dairy businesses in:",
    items: [
      "Building reliable cow/buffalo milk procurement networks",
      "AB/AT (antibiotic/adulterant) free milk programs",
      "A2 milk sourcing & positioning",
      "Organic milk supply chain development",
      "Farmer training systems",
      "Bulk milk cooler network planning",
    ],
  },
  {
    id: "coconut",
    title: "4. Coconut Milk & Plant-Based Dairy",
    intro: "India is rapidly growing in plant-based dairy alternatives. We support:",
    items: [
      "Coconut cream processing line setup",
      "Coconut milk powder spray drying",
      "Shelf-life improvement",
      "Export documentation",
      "Process stabilization",
    ],
  },
  {
    id: "sustainability",
    title: "5. Sustainability & Carbon Strategy",
    intro: "Dairy is energy-intensive. We help plants:",
    items: [
      "Reduce steam & electricity consumption",
      "Waste heat recovery planning",
      "Effluent treatment optimization",
      "Carbon footprint analysis",
      "Carbon reduction roadmap",
      "Carbon removal advisory partnerships",
    ],
  },
  {
    id: "greenfield",
    title: "6. Greenfield & Brownfield Dairy Projects",
    intro: "End-to-end support:",
    items: [
      "Techno-commercial feasibility study",
      "Project DPR preparation",
      "Vendor selection",
      "Plant layout planning",
      "Commissioning supervision",
      "Operational stabilization",
    ],
  },
];

const Services = () => (
  <>
    <PageHero title="Our Services" subtitle="Comprehensive dairy consulting from product development to sustainability." />

    <section className="py-16 lg:py-24">
      <div className="container-narrow space-y-20">
        {services.map((service) => (
          <div key={service.id} id={service.id}>
            <h2 className="font-heading text-xl lg:text-2xl font-bold text-primary mb-3">{service.title}</h2>
            <p className="text-muted-foreground mb-6">{service.intro}</p>

            {service.items && (
              <ul className="space-y-2 mb-6">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {service.supportItems && (
              <div className="mt-6">
                <h3 className="font-semibold text-primary mb-3">{service.supportItems.heading}</h3>
                <ul className="space-y-2">
                  {service.supportItems.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {service.subsections && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                {service.subsections.map((sub) => (
                  <div key={sub.heading} className="bg-card border border-border rounded p-6">
                    <h3 className="font-heading text-base font-semibold text-primary mb-3">{sub.heading}</h3>
                    <ul className="space-y-2">
                      {sub.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            <div className="section-divider mt-16" />
          </div>
        ))}
      </div>
    </section>
  </>
);

export default Services;

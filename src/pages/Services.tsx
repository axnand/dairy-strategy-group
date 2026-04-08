import PageHero from "@/components/PageHero";

interface ServiceSection {
  id: string;
  title: string;
  intro: string;
  subsections?: { heading: string; items: string[] }[];
  items?: string[];
  supportItems?: { heading: string; items: string[] };
  hasImage?: boolean;
  imageAlt?: string;
}

const services: ServiceSection[] = [
  {
    id: "product-dev",
    title: "1. Dairy Product Development & Commercialization",
    intro: "We assist companies in:",
    items: [
      "Setting up milk powder plants (SMP, WMP, FCMP)",
      "Sweetened condensed milk production",
      "Whey processing (DM90, DWP28, WPI)",
      "Caseinate & lactose (food & pharma grade)",
      "Ghee / AMF",
      "Butter & butter milk powder",
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
    hasImage: true,
    imageAlt: "Dairy product development and commercialization facility",
  },
  {
    id: "tech-consulting",
    title: "2. Dairy Plant Technology",
    intro: "With extensive experience in large-scale dairy plants, we provide:",
    subsections: [
      {
        heading: "Spray Dryer",
        items: ["Capacity calculation", "Product quality optimization", "Energy efficiency improvement", "Powder recovery enhancement"],
      },
      {
        heading: "Evaporator Systems",
        items: ["Multi-effect evaporator design review", "Steam optimization", "Fouling reduction strategies", "CIP validation"],
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
        items: ["Audit readiness", "Documentation system", "Quality control setup", "Layout planning", "Equipment selection"],
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
      "A2 milk sourcing",
      "Organic milk supply chain development",
      "Farmer training systems",
      "Bulk milk cooler network planning",
    ],
    hasImage: true,
    imageAlt: "Fresh milk sourcing and quality systems infrastructure",
  },
  {
    id: "coconut",
    title: "4. Coconut Milk & Plant-Based Dairy",
    intro: "India is rapidly growing in plant-based dairy alternatives. We support:",
    items: [
      "Coconut cream processing line setup",
      "Coconut milk powder spray drying",
      "Shelf-life improvement",
      "Process stabilization",
    ],
    hasImage: true,
    imageAlt: "Coconut milk and plant-based dairy processing",
  },
  {
    id: "sustainability",
    title: "5. Sustainability & Carbon Strategy",
    intro: "Dairy is energy-intensive. We help plants:",
    items: [
      "Reduce steam & electricity consumption",
      "Waste heat recovery planning",
      "Waste water recovery",
      "Effluent treatment optimization",
      "Carbon footprint",
      "Carbon reduction roadmap",
    ],
    hasImage: true,
    imageAlt: "Sustainability and carbon strategy in dairy operations",
  },
  {
    id: "greenfield",
    title: "6. Greenfield & Brownfield Dairy Projects",
    intro: "End-to-end support:",
    items: [
      "Techno-commercial feasibility study",
      "Vendor selection",
      "Plant layout planning",
      "Operational stabilization",
    ],
  },
];

const subsectionImageAlts: Record<string, string> = {
  "Spray Dryer": "Industrial spray dryer equipment for dairy processing",
  "Evaporator Systems": "Multi-effect evaporator system in dairy plant",
  "UHT & Retort Systems": "UHT and retort processing systems",
  "Ion Exchange & Lactose Processing": "Ion exchange equipment for lactose processing",
  "Hygienic Dry Mix Facility Design": "Hygienic dry mix facility layout",
  "MR1 Facility Preparedness": "MR1 facility readiness and audit setup",
};

const ImagePlaceholder = ({ alt }: { alt: string }) => (
  <div className="mt-6 mb-8 mx-auto w-full max-w-[800px]">
    <div className="relative w-full rounded-lg border-2 border-dashed border-border bg-muted/40 shadow-sm overflow-hidden" style={{ aspectRatio: '16/9' }}>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-muted-foreground">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-40">
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
        </svg>
        <span className="text-xs opacity-60 text-center px-4">{alt}</span>
      </div>
    </div>
  </div>
);

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

            {/* Image placeholder for sections with hasImage */}
            {service.hasImage && service.imageAlt && (
              <ImagePlaceholder alt={service.imageAlt} />
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
                    {/* Image placeholder inside each subsection card */}
                    <ImagePlaceholder alt={subsectionImageAlts[sub.heading] || `${sub.heading} equipment`} />
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

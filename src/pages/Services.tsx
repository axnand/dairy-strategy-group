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
  imageSrc?: string;
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
    imageSrc: "/dairy-product.png",
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
    imageSrc: "/fresh-milk.png",
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
    imageSrc: "/coconut-milk.png",
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
    imageSrc: "/sustainability.png",
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

const subsectionImages: Record<string, { src: string; alt: string }> = {
  "Spray Dryer": { src: "/spray-dryer.png", alt: "Industrial spray dryer equipment for dairy processing" },
  "Evaporator Systems": { src: "/evaporator.png", alt: "Multi-effect evaporator system in dairy plant" },
  "UHT & Retort Systems": { src: "/uht.png", alt: "UHT and retort processing systems" },
  "Ion Exchange & Lactose Processing": { src: "/ion-exchange.png", alt: "Ion exchange equipment for lactose processing" },
  "Hygienic Dry Mix Facility Design": { src: "/dry-mix.png", alt: "Hygienic dry mix facility layout" },
  "MR1 Facility Preparedness": { src: "/mr1.png", alt: "MR1 facility readiness and audit setup" },
};

const ServiceImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="mt-6 mb-8 mx-auto w-full max-w-[800px]">
    <img
      src={src}
      alt={alt}
      className="w-full rounded-lg shadow-sm object-cover"
      style={{ aspectRatio: '16/9' }}
    />
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

            {/* Image for sections with hasImage */}
            {service.hasImage && service.imageSrc && service.imageAlt && (
              <ServiceImage src={service.imageSrc} alt={service.imageAlt} />
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
                    {/* Image inside each subsection card */}
                    {subsectionImages[sub.heading] && (
                      <ServiceImage src={subsectionImages[sub.heading].src} alt={subsectionImages[sub.heading].alt} />
                    )}
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

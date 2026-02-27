import PageHero from "@/components/PageHero";

const beliefs = [
  "Technical excellence",
  "Operational discipline",
  "Sustainable growth",
  "Farmer-centric sourcing models",
  "International quality standards",
];

const About = () => (
  <>
    <PageHero title="About Nextgen Solutions" subtitle="Bridging global dairy standards with Indian operational realities." />

    <section className="py-16 lg:py-24">
      <div className="container-narrow max-w-3xl">
        <p className="text-lg leading-relaxed text-foreground mb-6">
          Nextgen Solutions is an independent dairy consulting firm founded by a 40+ year veteran of the Indian dairy industry, including 30 years with Nestlé India.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-6">
          Our mission is to bridge global dairy standards with Indian operational realities.
        </p>
        <p className="leading-relaxed text-muted-foreground mb-10">
          With deep expertise in milk powder plants, whey processing, UHT systems, coconut milk technology and sustainability initiatives, we support businesses across India in building scalable, compliant and future-ready dairy operations.
        </p>

        <div className="section-divider mb-10" />

        <h2 className="font-heading text-2xl font-bold text-primary mb-6">We Believe In</h2>
        <ul className="space-y-3">
          {beliefs.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-accent flex-shrink-0" />
              <span className="text-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  </>
);

export default About;

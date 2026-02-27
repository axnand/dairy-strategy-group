import PageHero from "@/components/PageHero";

const projects = [
  {
    title: "Milk Powder Plant Optimization – North India",
    result: "Improved spray dryer recovery by 3.2% and reduced steam consumption by 11%.",
  },
  {
    title: "AB-Free Milk Program – Western India",
    result: "Designed and implemented farmer-level antibiotic testing network across 120+ villages.",
  },
  {
    title: "Coconut Milk Powder Export Project",
    result: "Supported plant commissioning and achieved export compliance within 6 months.",
  },
  {
    title: "Evaporator Energy Optimization",
    result: "Reduced fouling frequency and improved evaporator uptime by 18%.",
  },
  {
    title: "Dry Mix Hygienic Facility Design",
    result: "Designed contamination-controlled blending plant for nutrition products.",
  },
];

const Projects = () => (
  <>
    <PageHero title="Projects & Engagements" subtitle="Selected consulting engagements demonstrating measurable impact." />

    <section className="py-16 lg:py-24">
      <div className="container-narrow">
        <div className="grid grid-cols-1 gap-8 max-w-3xl">
          {projects.map((project, i) => (
            <div key={i} className="border-l-2 border-accent pl-6 py-2">
              <h3 className="font-heading text-lg font-semibold text-primary mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{project.result}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Projects;

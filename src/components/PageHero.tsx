interface PageHeroProps {
  title: string;
  subtitle?: string;
}

const PageHero = ({ title, subtitle }: PageHeroProps) => (
  <section className="bg-primary text-primary-foreground py-16 lg:py-24">
    <div className="container-narrow">
      <h1 className="font-heading text-3xl lg:text-5xl font-bold mb-4 animate-fade-in-up">{title}</h1>
      {subtitle && (
        <p className="text-lg lg:text-xl opacity-80 max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          {subtitle}
        </p>
      )}
    </div>
  </section>
);

export default PageHero;

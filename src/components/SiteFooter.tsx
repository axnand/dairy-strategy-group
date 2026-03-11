import { Link } from "react-router-dom";

const SiteFooter = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container-narrow py-12 lg:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-heading text-lg font-semibold mb-4">Nextgen Dairy Solution</h3>
          <p className="text-sm opacity-70 leading-relaxed max-w-xs">
            Independent dairy consulting backed by 35+ years of industry experience including work with leading multinational organizations.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-80">Quick Links</h4>
          <nav className="flex flex-col gap-2">
            {["Services", "About", "Contact"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="text-sm opacity-70 hover:opacity-100 transition-opacity"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-80">Contact</h4>
          <p className="text-sm opacity-70 leading-relaxed">
            Email: info@nextgendairysolution.in<br />
            India
          </p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center">
        <p className="text-xs opacity-50">© {new Date().getFullYear()} Nextgen Dairy Solution. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default SiteFooter;

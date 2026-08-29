import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { navItems } from "../../lib/constants";
import logoPrimary from "../../assets/flexza-logo-primary.svg";
import { Button } from "../ui/Button";
import { openLeadPopup } from "../CTA/LeadPopup";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-xl">
      <nav className="section-shell flex h-20 items-center justify-between" aria-label="Main navigation">
        <Link to="/" className="flex items-center gap-2 font-extrabold text-ink" aria-label="Flexza home">
          <img src={logoPrimary} alt="" className="h-12 w-7 object-contain" />
          <span className="text-3xl">Flexza</span>
        </Link>
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={{ pathname: "/", hash: item.href }}
              className="text-md font-semibold text-muted transition hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="hidden items-center gap-3 sm:flex">
          <Button variant="secondary" className="min-h-10 px-5" onClick={openLeadPopup}>
            Book Demo
          </Button>
          <Button className="min-h-10 px-5" onClick={openLeadPopup}>
            Early Access
          </Button>
        </div>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-ink shadow-sm sm:hidden"
          aria-label="Open navigation"
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </button>
      </nav>
    </header>
  );
}

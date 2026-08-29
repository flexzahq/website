import { Link } from "react-router-dom";
import { footerGroups } from "../../lib/constants";
import logoPrimary from "../../assets/flexza-logo-primary.svg";

function toInternal(href: string) {
  const [pathname, hash] = href.split("#");
  return {
    pathname: pathname || "/",
    hash: hash ? `#${hash}` : "",
  };
}

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white py-12">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Link to="/" className="flex items-center gap-3 font-extrabold text-ink" aria-label="Flexza home">
              <img src={logoPrimary} alt="" className="w-12 object-contain"/>
              <span className="text-4xl">Flexza</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-6 text-muted">
              Digital token and live queue management for clinics, salons, and service businesses.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-extrabold text-ink">{group.title}</h3>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      {link.href.startsWith("http") ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm font-semibold text-muted transition hover:text-primary"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          to={toInternal(link.href)}
                          className="text-sm font-semibold text-muted transition hover:text-primary"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 border-t border-black/5 pt-6 text-sm font-semibold text-muted">
          © 2026 Flexza. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

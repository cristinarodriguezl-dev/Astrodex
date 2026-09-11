import { useState } from "react";
import "./Header.css";

const NAV_LINKS = [
  { path: "#", label: "Inicio" },
  { path: "#", label: "Catálogo" },
  { path: "#", label: "Astrowiki" },
  { path: "#", label: "Observatorio" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo-container">
          <a href="#" className="header-logo-link">
            <img
              alt="Astrodex Logo Cósmico"
              className="header-logo"
              src="public/icons.png"
            />

            <div className="header-brand">
              <span className="header-title">
                Astrodex
              </span>

              <span className="header-subtitle">
                Enciclopedia cósmica
              </span>
            </div>
          </a>
        </div>

        <nav className="header-nav">
  {NAV_LINKS.map((link, i) => (
    <a
      key={i}
      href={link.path}
      className={`header-nav-link ${
        i === 0 ? "header-nav-link-active" : ""
      }`}
    >
      {i === 0 && <span className="header-active-dot" />}
      <span>{link.label}</span>
    </a>
  ))}
</nav>

        <div className="header-actions">
          <button className="header-explore-button">
            <span className="material-symbols-outlined">
              auto_awesome
            </span>

            <span className="hidden lg:inline">Explorar Cosmos</span>
          </button>

          <button
            className="header-menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menú"
          >
            <span className="material-symbols-outlined">
              {isMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="header-mobile-nav">
          {NAV_LINKS.map((link, i) => (
            <a
              key={i}
              href={link.path}
              className={`header-mobile-nav-link ${
                i === 0 ? "header-mobile-nav-link-active" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {i === 0 && <span className="header-active-dot" />}
              <span>{link.label}</span>
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
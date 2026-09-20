import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const NAV_LINKS = [
  { path: "/", label: "Inicio" },
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
          <NavLink to="/" className="header-logo-link">
            <img
              alt="Astrodex Logo Cósmico"
              className="header-logo"
              src="/icons.png"
            />

            <div className="header-brand">
              <span className="header-title">Astrodex</span>
              <span className="header-subtitle">Enciclopedia cósmica</span>
            </div>
          </NavLink>
        </div>

        <nav className="header-nav">
          {NAV_LINKS.map((link, i) => (
            <NavLink
              key={i}
              to={link.path}
              end
              className={({ isActive }) =>
                `header-nav-link ${isActive && link.path !== "#" ? "header-nav-link-active" : ""}`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && link.path !== "#" && (
                    <span className="header-active-dot" />
                  )}
                  <span>{link.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <button className="header-explore-button">
            <span className="material-symbols-outlined">auto_awesome</span>
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
            <NavLink
              key={i}
              to={link.path}
              end
              className={({ isActive }) =>
                `header-mobile-nav-link ${isActive && link.path !== "#" ? "header-mobile-nav-link-active" : ""}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {({ isActive }) => (
                <>
                  {isActive && link.path !== "#" && (
                    <span className="header-active-dot" />
                  )}
                  <span>{link.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
import "./Header.css";

const NAV_LINKS = [
  { path: "#", label: "Inicio" },
  { path: "#", label: "Catálogo" },
  { path: "#", label: "Astrowiki" },
  { path: "#", label: "Observatorio" },
];

export default function Header() {
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

            <span>Explorar Cosmos</span>
          </button>
        </div>
      </div>
    </header>
  );
}
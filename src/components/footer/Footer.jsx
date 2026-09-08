import "./Footer.css";

const EXPLORATION_LINKS = [
  { path: "#", label: "Imágenes de la NASA" },
  { path: "#", label: "Rarezas Planetarias" },
  { path: "#", label: "Las fases de la Luna" },
  { path: "#", label: "Glosario Cósmico" },
];

const CREDIT_LINKS = [
  { path: "#", label: "Observatorios de España" },
  { path: "#", label: "Recursos gratuitos" },
  { path: "#", label: "Uso de Astrodex" },
  { path: "#", label: "Preguntas Frecuentes" },
];

const LEGAL_LINKS = [
  { path: "#", label: "Condiciones de Uso" },
  { path: "#", label: "Accesibilidad" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-content">

          <div className="footer-brand">
            <div className="footer-brand-header">
              <img
                src="src/assets/img/icons.png"
                alt="Astrodex Cute Planet Logo"
                className="footer-logo"
              />

              <span className="footer-title">
                Astrodex
              </span>
            </div>

            <p className="footer-description">
              Enciclopedia cósmica pensada para reunir en un solo lugar todo lo relacionado con el universo para facilitar la investigación y el aprendizaje.
            </p>

            <div className="footer-accessibility-badge">
              <span className="material-symbols-outlined">
                verified
              </span>

              <span>
                Solo datos verificados.
              </span>
            </div>
          </div>

          <div className="footer-column">
            <span className="footer-heading">
              Más para explorar
            </span>

            <nav className="footer-links">
              {EXPLORATION_LINKS.map((link, index) => (
                <a
                  key={index}
                  href={link.path}
                  className="footer-link"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="footer-column">
            <span className="footer-heading">
              Otros recursos
            </span>

            <nav className="footer-links">
              {CREDIT_LINKS.map((link, index) => (
                <a
                  key={index}
                  href={link.path}
                  className="footer-link"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

        </div>

        
        <div className="footer-bottom">

          <p className="footer-copyright">
            © 2026 Astrodex. CC BY-NC 4.0. Hecho con curiosidad infinita. 
          </p>

          <nav className="footer-legal-links">
            {LEGAL_LINKS.map((link, index) => (
              <a
                key={index}
                href={link.path}
                className="footer-legal-link"
              >
                {link.label}
              </a>
            ))}
          </nav>

        </div>

      </div>
    </footer>
  );
}

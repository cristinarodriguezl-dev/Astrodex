import "./ThreeDoors.css";

const DOORS = [
  {
    icon: "style",
    title: "Catálogo",
    text: "Fichas de planetas, nebulosas y galaxias para coleccionar.",
    linkLabel: "Ver catálogo",
  },
  {
    icon: "menu_book",
    title: "Astrowiki",
    text: "Artículos y curiosidades explicados de forma sencilla.",
    linkLabel: "Abrir Astrowiki",
  },
  {
    icon: "travel_explore",
    title: "Observatorio",
    text: "Lo que puedes ver en el cielo y eventos astronómicos.",
    linkLabel: "Ir al Observatorio",
  },
];

export default function ThreeDoors() {
  return (
    <section className="three-doors">
      <div className="three-doors-container">
        <div className="three-doors-header">
          <h2 className="three-doors-title">Tres puertas al cosmos</h2>
          <p className="three-doors-subtitle">
            Elige por dónde quieres empezar a explorar.
          </p>
        </div>

        <div className="three-doors-grid">
          {DOORS.map((door) => (
            <a key={door.title} href="#" className="three-doors-card">
              <div className="three-doors-icon">
                <span className="material-symbols-outlined">{door.icon}</span>
              </div>

              <h3 className="three-doors-card-title">{door.title}</h3>
              <p className="three-doors-card-text">{door.text}</p>

              <span className="three-doors-card-link">
                {door.linkLabel}
                <span className="material-symbols-outlined">arrow_forward</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
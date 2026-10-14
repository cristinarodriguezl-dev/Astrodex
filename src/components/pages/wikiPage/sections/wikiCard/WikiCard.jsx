import "./WikiCard.css";

const BRIEF_LENGTH = 140;

// Deja la descripción de la tarjeta corta para que quepa en la portada
function toBrief(text) {
  if (text.length <= BRIEF_LENGTH) return text;
  return `${text.slice(0, BRIEF_LENGTH).trimEnd()}...`;
}

export default function WikiCard({ item, onSelect }) {
  return (
    <button
      type="button"
      className="wiki-card"
      onClick={() => onSelect(item)}
    >
      <div className="wiki-card-image-wrapper">
        {item.image ? (
          <img
            src={item.image}
            alt=""
            className="wiki-card-image"
            loading="lazy"
          />
        ) : (
          <span className="wiki-card-placeholder material-symbols-outlined">
            auto_awesome
          </span>
        )}
      </div>

      <div className="wiki-card-content">
        <h3 className="wiki-card-title">{item.title}</h3>
        <p className="wiki-card-description">{toBrief(item.extract)}</p>
        <span className="wiki-card-link">
          Ver ficha
          <span className="material-symbols-outlined">arrow_forward</span>
        </span>
      </div>
    </button>
  );
}

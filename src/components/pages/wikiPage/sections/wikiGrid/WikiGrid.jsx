import WikiCard from "../wikiCard/WikiCard.jsx";
import "./WikiGrid.css";

export default function WikiGrid({
  items,
  status,
  query,
  onSelect,
  onRetry,
}) {
  if (status === "loading") {
    return <p className="wiki-grid-state">Buscando en la wiki...</p>;
  }

  if (status === "error") {
    return (
      <div className="wiki-grid-state">
        <p>No se pudo conectar con la wiki. Inténtalo de nuevo.</p>
        <button type="button" className="wiki-grid-retry" onClick={onRetry}>
          Reintentar
        </button>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <p className="wiki-grid-state">
        {query.trim()
          ? `No se encontraron resultados para «${query.trim()}».`
          : "Escribe un término para buscar en la wiki."}
      </p>
    );
  }

  return (
    <div className="wiki-grid">
      {items.map((item) => (
        <WikiCard key={item.id} item={item} onSelect={onSelect} />
      ))}
    </div>
  );
}

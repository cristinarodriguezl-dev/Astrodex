import "./WikiSearch.css";

export default function WikiSearch({ value, onChange }) {
  return (
    <div className="wiki-search">
      <span className="wiki-search-icon material-symbols-outlined">search</span>

      <input
        type="search"
        className="wiki-search-input"
        placeholder="Buscar objetos, estrellas, planetas..."
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-label="Buscar en la Astrowiki"
      />

      {value && (
        <button
          type="button"
          className="wiki-search-clear"
          onClick={() => onChange("")}
          aria-label="Limpiar búsqueda"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
      )}
    </div>
  );
}

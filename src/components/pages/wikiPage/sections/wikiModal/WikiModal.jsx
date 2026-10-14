import { useEffect } from "react";
import "./WikiModal.css";

export default function WikiModal({ item, onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="wiki-modal-backdrop" onClick={onClose}>
      <div
        className="wiki-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="wiki-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="wiki-modal-close"
          onClick={onClose}
          aria-label="Cerrar"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="wiki-modal-image-wrapper">
          {item.image ? (
            <img
              src={item.image}
              alt={item.title}
              className="wiki-modal-image"
            />
          ) : (
            <span className="wiki-modal-placeholder material-symbols-outlined">
              auto_awesome
            </span>
          )}
        </div>

        <div className="wiki-modal-content">
          <h2 id="wiki-modal-title" className="wiki-modal-title">
            {item.title}
          </h2>

          <div className="wiki-modal-scroll">
            <p className="wiki-modal-text">{item.extract}</p>
          </div>

          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="wiki-modal-link"
          >
            Leer más en Wikipedia
            <span className="material-symbols-outlined">open_in_new</span>
          </a>
        </div>
      </div>
    </div>
  );
}

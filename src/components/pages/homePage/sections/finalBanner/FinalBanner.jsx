import "./FinalBanner.css";

export default function FinalBanner() {
  return (
    <section className="final-banner">
      <div className="final-banner-card">
        <div className="final-banner-content">
          <h3 className="final-banner-title">Empieza a explorar Astrodex</h3>
          <p className="final-banner-text">
            Descubre el catálogo y aprende en la Astrowiki.
          </p>
        </div>

        <div className="final-banner-actions">
          <a href="#" className="final-banner-button-primary">
            Ver catálogo
          </a>
          <a href="#" className="final-banner-button-secondary">
            Ir a la Astrowiki
          </a>
        </div>
      </div>
    </section>
  );
}
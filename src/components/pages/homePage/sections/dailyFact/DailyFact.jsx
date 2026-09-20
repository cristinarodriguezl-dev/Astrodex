import "./DailyFact.css";
import plutoHeart from "../../../../../img/plutoheart.png";

export default function DailyFact() {
  return (
    <section className="daily-fact">
      <div className="daily-fact-card">
        <div className="daily-fact-content">
          <span className="daily-fact-badge">✦ Dato del día</span>

          <h2 className="daily-fact-title">
            Plutón tiene un corazón gigante de nitrógeno helado
          </h2>

          <p className="daily-fact-text">
            La región Tombaugh Regio tiene forma de corazón y su lóbulo izquierdo,
            Sputnik Planitia, es una llanura de hielo de nitrógeno de más de
            1.000 kilómetros.
          </p>

          <a href="#" className="daily-fact-link">
            Leer más en la Astrowiki
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>

        <div className="daily-fact-image-wrapper">
          <img
            src={plutoHeart}
            alt="Plutón"
            className="daily-fact-image"
          />
        </div>
      </div>
    </section>
  );
}
import { useState, useEffect } from "react";
import "./Carousel.css";

export default function MoonCarousel() {
  const [items, setItems] = useState([]);
  const [current, setCurrent] = useState(0);
  const [status, setStatus] = useState("loading");
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    fetch("https://images-api.nasa.gov/search?q=moon&media_type=image")
      .then((res) => res.json())
      .then((data) => {
        const raw = data.collection.items.slice(0, 10);
        const parsed = raw
          .map((it) => ({
            title: it.data[0].title,
            img: it.links?.[0]?.href,
          }))
          .filter((it) => it.img);
        setItems(parsed);
        setStatus("ready");
      })
      .catch(() => setStatus("error"));
  }, []);

  useEffect(() => {
    if (isPaused || items.length === 0) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % items.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused, items.length]);

  if (status === "loading") return <p>Cargando imágenes de la Luna...</p>;
  if (status === "error") return <p>Error al cargar las imágenes.</p>;

  const goPrev = () =>
    setCurrent((c) => (c - 1 + items.length) % items.length);
  const goNext = () => setCurrent((c) => (c + 1) % items.length);

  return (
    <section className="moon-carousel">
      <button
        className="moon-carousel-nav-btn"
        onClick={goPrev}
        aria-label="Anterior"
      >
        <span className="material-symbols-outlined">chevron_left</span>
      </button>

      <div
        className="moon-carousel-stage"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <img
          src={items[current].img}
          alt={items[current].title}
          className="moon-carousel-image"
        />

        <div className="moon-carousel-caption-overlay">
          <p className="moon-carousel-caption-text">
            {items[current].title}
          </p>
        </div>
      </div>

      <button
        className="moon-carousel-nav-btn"
        onClick={goNext}
        aria-label="Siguiente"
      >
        <span className="material-symbols-outlined">chevron_right</span>
      </button>
    </section>
  );
}
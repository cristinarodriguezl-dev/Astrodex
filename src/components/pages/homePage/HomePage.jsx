import MoonCarousel from "./sections/carousel/Carousel.jsx";
import DailyFact from "./sections/dailyFact/DailyFact.jsx";
import ThreeDoors from "./sections/threeDoors/ThreeDoors.jsx";
import FinalBanner from "./sections/finalBanner/FinalBanner.jsx";

export default function HomePage() {
  return (
    <>
      <main className="relative z-10 w-full pt-28 pb-8 px-6 text-center">
        <h1 className="font-headline-lg text-headline-lg text-white">
          En expansión... digo... construcción! ✨
        </h1>
        <section className="max-w-2xl mx-auto mt-4">
          <p className="font-body-md text-on-background">
            ¡Bienvenido a Astrodex! Un viaje por los secretos del cosmos.
          </p>
        </section>
      </main>

      <div className="relative z-10">
        <DailyFact />
        <MoonCarousel />
        <ThreeDoors />
        <FinalBanner />
      </div>
    </>
  );
}
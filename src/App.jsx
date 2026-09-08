import CosmicBackground from "./components/cosmicBackground/CosmicBackground.jsx";

export default function App() {
  return (
    <div className="bg-background font-body-md text-on-background min-h-screen relative selection:bg-purple-500/30 selection:text-purple-200">
      <CosmicBackground />
      <main className="relative z-10 w-full pt-20 flex items-center justify-center min-h-screen">
        <h1 className="font-headline-lg text-headline-lg text-white">
          Base de Astrodex funcionando ✨
        </h1>
      </main>
    </div>
  );
}

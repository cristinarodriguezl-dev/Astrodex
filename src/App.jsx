import { Routes, Route } from "react-router-dom";
import CosmicBackground from "./components/cosmicBackground/CosmicBackground.jsx";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Home from "./components/pages/homePage/HomePage.jsx";

export default function App() {
  return (
    <div className="bg-background font-body-md text-on-background min-h-screen relative selection:bg-purple-500/30 selection:text-purple-200">
      <Header />
      <CosmicBackground />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import './components/cosmicBackground/CosmicBackground.css'
import './components/header/Header.css'
import App from './App.jsx'

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
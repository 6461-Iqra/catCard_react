import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Card from "../components/card.jsx";
import Footer from "../components/footer.jsx";
import Navbar from "../components/navbar.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <Navbar/>
    
    <Card />

    <Footer />
  </>
);

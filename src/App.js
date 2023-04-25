import React from "react";
import "./style.css";
import Navigation from "./Navigation/Index";
import Header from "./Header";
import About from "./About";
import Gallery from "./Gallery";
import Contact from "./Contact";

function App() {
  return (
    <div className="body" id="home">
      <Navigation />
      <Header />
      <About />
      <Gallery />
      <Contact />
      <div className="footer">Autorka strony © Barbara Mroczek 2023. Wszystkie prawa zastrzeżone.</div>
    </div>
  );
}

export default App;

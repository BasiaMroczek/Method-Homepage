import React from "react";
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
    </div>
  );
}

export default App;

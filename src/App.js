import React from "react";
import Navigation from "./Navigation/Index";
import Header from "./Header";
import About from "./About";
import Gallery from "./Gallery";

function App() {
  return (
    <div className="body" id="home">
      <Navigation />
      <Header />
      <About />
      <Gallery />
      <div>
        Polecam
      </div>
    </div>
  );
}

export default App;

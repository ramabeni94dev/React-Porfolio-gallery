import "./App.css";
import React from "react";
import NavbarComponent from "./NavBar/NavBar";

import GalleryApp from "./FILMMAKING/GalleryApp";

import Footer from "./Footer/Footer";

function App() {
  return (
    <>
      <div>
        <NavbarComponent />
      </div>
      <div className="galeria">
        <GalleryApp />
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;

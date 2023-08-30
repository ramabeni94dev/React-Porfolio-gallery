import "./App.css";
import React from "react";
import NavbarComponent from "./NavBar/NavBar";

import GalleryApp from "./gallery/GalleryApp";

function App() {
  return (
    <>
      <div>
        <NavbarComponent />
      </div>
      <div>
        <GalleryApp />
      </div>
    </>
  );
}

export default App;

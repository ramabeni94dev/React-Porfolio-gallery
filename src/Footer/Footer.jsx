import React from "react";
import "./Footer.css"; // Importa tu archivo de CSS personalizado

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="container text-center">
        <img
          src="src/assets/img/logos/lucasbraga.png"
          alt="Logo"
          className="logo"
        />
        <h1 className="location">BUENOS AIRES, ARGENTINA</h1>
        <div className="social-links">
          <a
            href="https://www.instagram.com/braglucas/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="src/assets/img/logos/instagram.png"
              alt="Instagram"
              className="instagram-logo"
            />
          </a>
        </div>
        <div className="brand">
          &copy; 2023 LUCASBRAGA. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

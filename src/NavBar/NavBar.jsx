import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Importar los estilos de Bootstrap
import { Navbar, Nav, NavDropdown } from "react-bootstrap"; // Importar componentes de Bootstrap
import logo from "../assets/img/logos/lucasbraga.png";
import "./NavBar.css";

function NavbarComponent() {
  return (
    <Navbar bg="black" variant="dark" expand="lg">
      <Navbar.Brand href="#home">
        <img
          src={logo} // Usar el logo importado como fuente de la imagen
          height="30"
          className="d-inline-block align-top"
          alt="Mi Sitio Web"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavDropdown
            title="CATEGORIES"
            id="basic-nav-dropdown"
            className="custom-nav-dropdown"
          >
            <NavDropdown.Item href="#filmmaking">FILMMAKING</NavDropdown.Item>
            <NavDropdown.Item href="#flyers">FLYERS</NavDropdown.Item>
            <NavDropdown.Item href="#video-editing">
              VIDEO EDITING
            </NavDropdown.Item>
            <NavDropdown.Item href="#photography">PHOTOGRAPHY</NavDropdown.Item>
            <NavDropdown.Item href="#institutional">
              INSTITUTIONAL
            </NavDropdown.Item>
            <NavDropdown.Item href="#other-graphics">
              OTHER GRAPHICS
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#home">HOME</Nav.Link>

          <Nav.Link href="#contact">CONTACT</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Importar los estilos de Bootstrap
import { Navbar, Nav, NavDropdown } from "react-bootstrap"; // Importar componentes de Bootstrap

function NavbarComponent() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Mi Sitio Web</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#about">Acerca de</Nav.Link>
          <Nav.Link href="#services">Servicios</Nav.Link>
          <Nav.Link href="#contact">Contacto</Nav.Link>
          <NavDropdown title="Más" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action1">Acción 1</NavDropdown.Item>
            <NavDropdown.Item href="#action2">Acción 2</NavDropdown.Item>
            <NavDropdown.Item href="#action3">Acción 3</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action4">Separador</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;

import React from "react";
import "./css/NavegationBar.css";
import { useState } from "react";
// import { Nav, Navbar, NavDropdown } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
function NavegationBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="text-dark">
        <div className="position-relative container bg-transparent p-3 d-flex justify-content-between">
          <div className="btnMenu">
            <button
              className="btn"
              onClick={() => {
                setOpen((prev) => !prev);
              }}
            >
              Menu
            </button>
          </div>
          <div className="">
            <i className="bi bi-cart3"></i>
          </div>
        </div>
        <div className={open ? "abierto " : "cerrado"}>
          <ul className="subMenu">
            <li className="subMenu-hijos">Home</li>
            <li className="subMenu-hijos">Productos</li>
            <li className="subMenu-hijos">Sobre el proyecto</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavegationBar;

{
  /* <div>
<Navbar
  collapseOnSelect
  expand="xxl"
  bg="transparent"
  variant="white"
>
  <div>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">
            Action
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">
            Another action
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">
            Something
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">
            Separated link
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Nav>
        <Nav.Link href="#deets">More deets</Nav.Link>
        <Nav.Link eventKey={2} href="#memes">
          Dank memes
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </div>
  <Navbar.Brand href="#home">Dice Roller</Navbar.Brand>
</Navbar>
</div> */
}

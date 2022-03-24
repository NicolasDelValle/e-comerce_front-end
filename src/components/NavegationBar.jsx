import React from "react";
import "./css/NavegationBar.css";
import { useState } from "react";
import logo from "../img/logos/imagotipo.png";

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
              <img src={`${logo}`} alt="" />
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

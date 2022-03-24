import React from "react";
import "./css/NavigationBar.css";
import { useState } from "react";
import logo from "../img/logos/imagotipoNegro.png";

function NavigationBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="nav">
        <div className="position-relative container bg-transparent p-3 d-flex justify-content-between align-items-center">
          <div
            className="d-flex align-items-center"
            onClick={() => {
              setOpen((prev) => !prev);
            }}
          >
            <div className="btnMenu">
              <img src={`${logo}`} alt="Logo" />
            </div>
            <h2 className="ps-2 btn text-white">Inicio</h2>
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

export default NavigationBar;

import React from "react";
import "./css/NavigationBar.css";
import { useState } from "react";
import logo from "../img/logos/imagotipoNegro.png";

function NavigationBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="navigation">
        <div className="container">
          <div className="bg-transparent p-3 d-flex justify-content-between apgn-items-center">
            <div
              className="d-flex align-items-center"
              onClick={() => {
                setOpen((prev) => !prev);
              }}
            >
              <div className="btnMenu" title="Boton de inicio">
                <img src={`${logo}`} alt="Logo" />
              </div>
              <h2 className="ps-2 btn text-white d-none d-sm-block">Inicio</h2>
            </div>
            <div
              className="btnCarrito d-flex align-items-center"
              title="Carrito de compras"
            >
              <i className="bi bi-cart3 pe-2"></i>
            </div>
          </div>
          <div className={open ? "abierto " : "cerrado"}>
            <div className="row">
              <div className="col-12 col-md-4">
                <p className="subMenu-hijos">Home</p>
              </div>
              <div className="col-12 col-md-4">
                <p className="subMenu-hijos">Productos</p>
              </div>
              <div className="col-12 col-md-4">
                <p className="subMenu-hijos">Sobre el proyecto</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavigationBar;

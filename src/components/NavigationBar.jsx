import React from "react";
import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import "./css/NavigationBar.css";
import logo from "../img/logos/imagotipoNegro.png";

function NavigationBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="navigation">
        <div className="container d-flex">
          <Dropdown className="w-100">
            <Dropdown.Toggle
              className="bg-transparent d-flex justify-content-between align-items-center btnMenu "
              title="Boton de inicio"
            >
              <img src={`${logo}`} alt="Logo" />
              <h2 className="ps-2 btn text-white d-none d-sm-block">Inicio</h2>
            </Dropdown.Toggle>
            <Dropdown.Menu className="">
              <div className="row">
                <div className="col-md-3">
                  <Dropdown.Item href="#/action-1">
                    <div className="px-2">Home</div>
                  </Dropdown.Item>
                </div>
                <div className="col-md-3">
                  <Dropdown.Item href="#/action-1">
                    <div className="px-2">Productos</div>
                  </Dropdown.Item>
                </div>
                <div className="col-md-3">
                  <Dropdown.Item href="#/action-1">
                    <div className="px-2">Sobre el proyecto</div>
                  </Dropdown.Item>
                </div>
                <div className="col-md-3">
                  <Dropdown.Item href="#/action-1">
                    <div className="px-2">Sobre el Nosotros</div>
                  </Dropdown.Item>
                </div>
              </div>
            </Dropdown.Menu>
          </Dropdown>
          <div
            className="btnCarrito d-flex align-items-center ms-auto"
            title="Carrito de compras"
          >
            <i className="bi bi-cart3 pe-2"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavigationBar;

import React from "react";
import { Dropdown } from "react-bootstrap";
import "./css/NavigationBar.css";
import imagotipoNegro from "../img/logos/imagotipoNegro.png";
import logoBlanco from "../img/logos/logoBlanco.png";

function NavigationBar() {
  return (
    <>
      <div className="navigation mb-5">
        <div className="container">
          <div className="w-100 mx-auto">
            <Dropdown>
              <div className="bg-transparent w-100 d-flex align-items-center justify-content-between  p-0 ">
                <h2 className="text-white d-none d-sm-block">Home</h2>
                <Dropdown.Toggle title="Boton de inicio">
                  <img
                    className="btnMenu"
                    src={`${imagotipoNegro}`}
                    alt="Logo"
                  />
                  <img className="btnMenu" src={`${logoBlanco}`} alt="Logo" />
                </Dropdown.Toggle>

                <a
                  href="/shop"
                  className="text-white d-none d-sm-block btnCarrito d-flex align-items-center"
                  title="Carrito de compras"
                >
                  <i className="bi bi-cart3 pe-2"></i>
                </a>
              </div>
              <Dropdown.Menu className=" mt-1 submenu">
                <div className="row text-center px-2">
                  <div className="col-md-3">
                    <Dropdown.Item>
                      <strong>Home</strong>
                    </Dropdown.Item>
                  </div>
                  <div className="col-md-3">
                    <Dropdown.Item>
                      <strong>Productos</strong>
                    </Dropdown.Item>
                  </div>
                  <div className="col-md-3">
                    <Dropdown.Item>
                      <strong>Sobre el Proyecto</strong>
                    </Dropdown.Item>
                  </div>
                  <div className="col-md-3">
                    <Dropdown.Item>
                      <strong>Sobre Nosotros</strong>
                    </Dropdown.Item>
                  </div>
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavigationBar;

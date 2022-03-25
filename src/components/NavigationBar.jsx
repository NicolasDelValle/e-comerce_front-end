import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import "./css/NavigationBar.css";
import imagotipoNegro from "../img/logos/imagotipoNegro.png";
import logoBlanco from "../img/logos/logoBlanco.png";

function NavigationBar() {
  return (
    <>
      <div className="navigation mb-5">
        <div className="container">
          <div className="mx-auto">
            <Dropdown>
              <div className="bg-transparent d-flex align-items-center justify-content-between  p-0 ">
                <Link
                  to={"/"}
                  className="btn text-white text-decoration-none d-none d-sm-block h1"
                  title="Boton de inicio"
                >
                  <p className="">Home</p>
                </Link>
                <Dropdown.Toggle title="Menu">
                  <div className="experimento">
                    <img
                      className="btnMenu"
                      src={`${imagotipoNegro}`}
                      alt="Logo"
                    />
                    <img className="btnMenu" src={`${logoBlanco}`} alt="Logo" />
                  </div>
                </Dropdown.Toggle>

                <Link
                  to="/shop"
                  className="text-white d-none d-sm-flex align-items-center btnCarrito"
                  title="Carrito de compras"
                >
                  <i className="bi bi-cart3 pe-2"></i>
                </Link>
              </div>
              <Dropdown.Menu className="mt-1 submenu">
                <div className="row text-center px-2">
                  <div className="col-md-3">
                    <Dropdown.Item>
                      <Link to={"/"} className="btn text-decoration-none">
                        <strong>Home</strong>
                      </Link>
                    </Dropdown.Item>
                  </div>
                  <div className="col-md-3">
                    <Dropdown.Item>
                      <Link to={"/"} className="btn text-decoration-none">
                        <strong>Productos</strong>
                      </Link>
                    </Dropdown.Item>
                  </div>
                  <div className="col-md-3">
                    <Dropdown.Item>
                      <Link to={"/"} className="btn text-decoration-none">
                        <strong>Sobre el Proyecto</strong>
                      </Link>
                    </Dropdown.Item>
                  </div>
                  <div className="col-md-3">
                    <Dropdown.Item>
                      <Link to={"/"} className="btn text-decoration-none">
                        <strong>Sobre Nosotros</strong>
                      </Link>
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

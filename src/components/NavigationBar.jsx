import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import "./css/NavigationBar.css";

import logoBlanco from "../img/logos/logoBlanco.png";

function NavigationBar() {
  return (
    <>
      <div className="navigation mb-5">
        <div className="container px-0">
          <Dropdown>
            <div className="bg-transparent p-0 ">
              <Dropdown.Toggle
                title="Menu"
                className="d-flex align-items-center justify-content-between w-100 px-0"
              >
                <div
                  className="text-white  text-decoration-none d-flex align-items-center w-25"
                  title="Boton de inicio"
                >
                  <p className="text-white text-center mb-0 fs-2">Menu</p>
                </div>
                <div className="w-25">
                  <Link to="/">
                    <img
                      className="btnMenu d-none d-sm-flex"
                      src={`${logoBlanco}`}
                      alt="Logo"
                    />
                  </Link>
                </div>
                {/* Carrito */}
                <Link
                  to="/"
                  className="text-white d-flex justify-content-end align-items-center btnCarrito w-25"
                  title="Carrito de compras"
                >
                  <i className="bi bi-cart3  ms-auto"></i>
                </Link>
              </Dropdown.Toggle>
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
                    <Link to={"/shop"} className="btn text-decoration-none">
                      <strong>Products</strong>
                    </Link>
                  </Dropdown.Item>
                </div>
                <div className="col-md-3">
                  <Dropdown.Item>
                    <Link
                      to={"/aboutproject"}
                      className="btn text-decoration-none"
                    >
                      <strong>About Project</strong>
                    </Link>
                  </Dropdown.Item>
                </div>
                <div className="col-md-3">
                  <Dropdown.Item>
                    <Link to={"/aboutus"} className="btn text-decoration-none">
                      <strong>About Us</strong>
                    </Link>
                  </Dropdown.Item>
                </div>
              </div>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </>
  );
}

export default NavigationBar;

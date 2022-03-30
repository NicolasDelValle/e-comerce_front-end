import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, Container, Navbar } from "react-bootstrap";
import "./css/NavigationBar.css";
import logoBlanco from "../img/logos/logoBlanco.png";

function NavigationBar() {
  return (
    <>
      <Navbar>
        <Container className="d-flex justify-content-between align-items-center">
          <Link
            className="wLogoContainer d-flex justify-content-center p-0 m-0 border-none"
            to="/"
          >
            <img
              className="wLogoContainer-logo me-auto"
              src={logoBlanco}
              alt="Logo"
            />
          </Link>

          <div className="ms-auto text-white d-flex justify-content-between align-items-center">
            <Link to="/checkout" title="Carrito de compras">
              <span>Ingresar</span>
            </Link>
            <span className="mx-2">|</span>
            <Link to="/checkout" title="Carrito de compras">
              <span>Registrarse</span>
            </Link>
            {/*SI YA SE LOGUE CON EL NOMBRE Y TODO */}
            <Link
              to="/checkout"
              className="ms-2 d-flex align-items-center"
              title="Carrito de compras"
            >
              <i className="bi bi-person-circle fs-3 position-relative me-1"></i>
              <span>Enrique Miguel Iglesias</span>
            </Link>
            <Link
              to={"/shop"}
              className="px-2 text-white text-decoration-none d-flex justify-content-between align-items-center"
            >
              <i class="bi bi-shop-window fs-4"></i>
            </Link>
            <Link
              to="/checkout"
              className=" ps-2 d-flex align-items-start"
              title="Carrito de compras"
            >
              <div className="ms-auto position-relative">
                <i className="bi bi-cart3 fs-3 position-relative"></i>
                <span className=" badge rounded-pill bg-danger py-1 px-1 position-absolute top-0 end-50">
                  000
                </span>
              </div>
            </Link>
            {/*SI ES ADMIN :D */}
            <Link
              to="/checkout"
              className=" ps-2 d-flex align-items-start"
              title="Carrito de compras"
            >
              <i className="bi bi-gear fs-3 position-relative"></i>
            </Link>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;

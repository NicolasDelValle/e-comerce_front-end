import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, Container, Navbar } from "react-bootstrap";
import "./css/NavigationBar.css";
import logoBlanco from "../img/logos/logoBlanco.png";

function NavigationBar() {
  return (
    <>
      <Navbar className="navbar" expand="lg">
        <Container>
          <Navbar.Toggle className="text-white">
            <i class="bi bi-list"></i>
          </Navbar.Toggle>
          <Link className="logo d-flex justify-content-center" to="/">
            <img className="logo" src={logoBlanco} alt="Logo" />
          </Link>
          <Link
            to="/checkout"
            className="text-white d-flex d-lg-none"
            title="Carrito de compras"
          >
            <i className="bi bi-cart3"></i>
          </Link>

          <Navbar.Collapse
            className="text-white ms-auto d-lg-flex justify-content-lg-center"
            id="responsive-navbar-nav"
          >
            <Link to={"/aboutus"} className="text-decoration-none">
              Us
            </Link>
            <Link to={"/aboutproject"} className="text-decoration-none">
              Project
            </Link>
            <Link to={"/shop"} className="text-decoration-none">
              Products
            </Link>
          </Navbar.Collapse>
          <Link
            to="/checkout"
            className="text-white d-none d-lg-flex"
            title="Carrito de compras"
          >
            <i className="bi bi-cart3"></i>
          </Link>
        </Container>
      </Navbar>
      {/* DESDE AQUI 
      <div className="navigation position-fixed w-100">
        <div className="container">
          <Dropdown>
            <div>
              <div>
                
                <div className="d-flex justify-content-between">
                  <Link
                    to="/checkout"
                    className="text-white d-flex justify-content-end align-items-center btnCarrito w-25"
                    title="Carrito de compras"
                  >
                    <i className="bi bi-cart3  ms-auto"></i>
                  </Link>
                  
                </div>
              </div>
              <Dropdown.Toggle
                title="Menu"
                className="d-flex align-items-center justify-content-between w-100"
              >
                <div
                  className="text-white  text-decoration-none d-flex align-items-center w-25"
                  title="Boton de inicio"
                >
                  <p className="text-white text-center">Menu</p>
                </div>

                {/* Carrito 
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
                    
                  </Dropdown.Item>
                </div>
              </div>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      */}
    </>
  );
}

export default NavigationBar;

import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, Container, Navbar } from "react-bootstrap";
import "./css/NavigationBar.css";
import logoBlanco from "../img/logos/logoBlanco.png";
import { useDispatch } from "react-redux";
import actions from "../redux/actions/userActions";

function NavigationBar() {
  const dispatch = useDispatch();
  const CustomToggle = React.forwardRef(({ onClick }, ref) => (
    <a
      className="d-flex align-items-center mx-2 me-1 pe-0"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      <i className="bi bi-person-circle fs-4 d-flex"></i>
      {/* <span className="d-none d-sm-flex">Cuenta</span> */}
      <i class="bi bi-chevron-down pt-1"></i>
    </a>
  ));

  return (
    <>
      <Navbar className="bg-black">
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
            {/* 
            {/*SI YA SE LOGUE CON EL NOMBRE Y TODO 
            <Link
              to="/checkout"
              className="ms-2 d-flex align-items-center"
              title="Carrito de compras"
            ></Link>*/}

            <Link
              to={"/shop"}
              className="px-2 text-white text-decoration-none d-flex justify-content-between align-items-center"
            >
              <i class="bi bi-shop-window fs-4 d-flex d-sm-none"></i>
              <span className="d-none d-sm-flex">Tienda</span>
            </Link>
            <Link
              to={"/shop"}
              className="px-2 text-white text-decoration-none d-flex justify-content-between align-items-center"
            >
              <i class="bi bi-people fs-3 d-flex d-sm-none"></i>
              <span className="d-none d-sm-flex">Nosotros</span>
            </Link>

            {/*SI ES ADMIN :D */}
            {/* <Link
              to="/checkout"
              className="d-flex ps-3 align-items-start"
              title="Carrito de compras"
            >
              <i className="bi bi-gear fs-4 position-relative"></i>
            </Link> */}
            <Dropdown>
              <Dropdown.Toggle
                as={CustomToggle}
                id="dropdown-custom-components"
              ></Dropdown.Toggle>
              <Dropdown.Menu
                align={{ xxl: "start" }}
                className="bg-black text-white mt-3"
              >
                <div className="d-flex flex-column">
                  {/* <Link
                    className="p-1 w-100 "
                    to="/login"
                    title="Ingresar"
                  >
                    <span>Ingresar</span>
                    <i class="bi bi-box-arrow-up-right ms-1"></i>
                  </Link>
                  <Dropdown.Divider />
                  <Link
                    className="p-1 w-100"
                    to="/register"
                    title="Registrarse"
                  >
                    <span>Registrarse</span>
                    <i class="bi bi-box-arrow-up-right ms-1"></i>
                  </Link> */}
                  {/* Logueado*/}
                  <Link className="p-1 w-100 " to="/checkout" title="Perfil">
                    <span>Perfil</span>
                    <i class="bi bi-box-arrow-up-right ms-1"></i>
                  </Link>
                  <Link className="p-1 w-100 " to="/checkout" title="Historial">
                    <span>Historial</span>
                    <i class="bi bi-box-arrow-up-right ms-1"></i>
                  </Link>
                  <Dropdown.Divider />
                  <Link
                    className="p-1 w-100 text-danger"
                    to="/"
                    title="Carrito de compras"
                    /*cerrar sesion*/
                    onClick={() => dispatch(actions.deleteUser)}
                  >
                    <span>Cerrar Sesion</span>
                  </Link>
                </div>
              </Dropdown.Menu>
            </Dropdown>

            <Link
              to="/checkout"
              className=" ps-3 d-flex align-items-start"
              title="Carrito de compras"
            >
              <div className="ms-auto position-relative">
                <i className="bi bi-cart3 fs-4 position-relative"></i>
                <span className=" badge rounded-pill bg-danger py-1 px-1 position-absolute top-0 end-50">
                  99
                </span>
              </div>
            </Link>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;

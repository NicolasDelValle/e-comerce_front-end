import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import "./css/Footer.css";
function Footer() {
  return (
    <div className="colorFooter text-white mb-0 mt-auto sticky-bottom">
      <div className="footer container py-2">
        <div className="row text-start px-0 text-center">
          <Link
            to={"/"}
            className="col-sm-4 mb-0 text-decoration-none text-white"
          >
            Home
          </Link>
          <Link
            to={"/shop"}
            className="col-sm-4 mb-0 text-decoration-none text-white"
          >
            Productos
          </Link>
          <Link
            to={"/"}
            className="col-sm-4 mb-0 text-decoration-none text-white"
          >
            Sobre el proyecto
          </Link>
        </div>
        <div className="d-flex justify-content-between align-items-center pb-2 mx-auto">
          <i className="align-item-center">
            <div className="w-75 mx-auto ">
              <hr />
            </div>
            Proyecto de Carlos Garcia Arocena y Thomas Hughes cuyo objetivo es
            aportarle a la escena cultural del skate uruguayo una marca que
            refleje los verdaderos valores del Skate.
            <div className="w-75 mx-auto ">
              <hr />
            </div>
          </i>
        </div>

        <div className="row text-center  pt-2">
          <div className="col-sm-6">
            <p className="">LOSI SKATE CO.</p>
          </div>
          <div className="col-sm-6">
            <p className="mb-0 fs-6">Todos los derechos reservados </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import "./css/Footer.css";
function Footer() {
  return (
    <div className="colorFooter text-white mb-0 mt-auto pt-4">
      <div className="footer">
        <div className="container">
          <div className="row py-2">
            <div className="col-md-3 col-6 text-start">
              <h6 className="mb-3">Contacto</h6>
              <p>contacto@contacto.uy</p>
              <p>091 234 567</p>
              <p>Política de privacidad</p>
            </div>
            <div className="col-md-3 col-6 text-start">
              <h6 className="mb-3">Tienda</h6>
              <div className="text-start text-start">
                <Link to={"/"} className="d-block text-white mb-3">
                  Home
                </Link>
                <Link to={"/shop"} className="d-block text-white mb-3">
                  Products
                </Link>
                <Link to={"/aboutproject"} className="d-block text-white mb-3">
                  About Project
                </Link>
              </div>
            </div>
            <div className="col-md-6 col d-flex align-items-center">
              <p>
                Este proyecto consiste en la creación de un sitio web, donde se
                volcaron todos los conocimientos obtenidos durante la cursada,
                reflejandolos en las características y funcionalidades que se
                esperan encontrar a diario en un e-commerce.
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="container">
          <div className="d-flex justify-content-between  pt-2">
            <p className="">LOSI SKATE CO.</p>

            <p className="mb-0 fs-6">All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

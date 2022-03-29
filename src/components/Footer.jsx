import React from "react";
import { Link } from "react-router-dom";
import "./css/Footer.css";
function Footer() {
  return (
    <div className="colorFooter text-white mb-0 mt-auto pt-4">
      <div className="footer container py-2">
        <div className="row text-start px-0 text-center">
          <Link to={"/"} className="col-sm-3 text-white m-0">
            Home
          </Link>
          <Link to={"/shop"} className="col-sm-3 text-white m-0">
            Products
          </Link>
          <Link to={"/"} className="col-sm-3 text-white m-0">
            About Project
          </Link>
          <Link to={"/aboutus"} className="col-sm-3 text-white m-0">
            About Us
          </Link>
        </div>
        <div className="d-flex justify-content-between align-items-center p-2 mx-auto">
          <i className="align-item-center">
            <div className="w-55 mx-auto ">
              <hr />
            </div>
            <p>
              Este proyecto consiste en la creación de un sitio web, donde se
              volcaron todos los conocimientos obtenidos durante la cursada,
              reflejandolos en las características y funcionalidades que se
              esperan encontrar a diario en un e-commerce.
            </p>
            <div className="w-55 mx-auto ">
              <hr />
            </div>
          </i>
        </div>

        <div className="row text-center  pt-2">
          <div className="col-sm-6">
            <p className="">LOSI SKATE CO.</p>
          </div>
          <div className="col-sm-6">
            <p className="mb-0 fs-6">All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

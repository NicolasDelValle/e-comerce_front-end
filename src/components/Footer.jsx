import React from "react";
import { Link } from "react-router-dom";
import "./css/Footer.css";
function Footer() {
  return (
    <div className="colorFooter text-white mb-0 mt-auto pt-2">
      <div className="footer container py-2">
        <div className="row text-start px-0 text-center">
          <Link to={"/"} className="col-sm-3 text-white">
            Home
          </Link>
          <Link to={"/shop"} className="col-sm-3 text-white">
            Products
          </Link>
          <Link to={"/"} className="col-sm-3 text-white">
            About Project
          </Link>
          <Link to={"/aboutus"} className="col-sm-3 text-white">
            About Us
          </Link>
        </div>
        <div className="d-flex justify-content-between align-items-center pb-2 mx-auto">
          <i className="align-item-center">
            <div className="w-75 mx-auto ">
              <hr />
            </div>
            Este proyecto consiste en la creación de un sitio web, donde se
            volcaron todos los conocimientos obtenidos durante la cursada,
            reflejandolos en las características y funcionalidades que se
            esperan encontrar a diario en un e-commerce.
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
            <p className="mb-0 fs-6">All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

import React from "react";
// import { Link } from "react-router-dom";
import "./css/Footer.css";
function Footer() {
  return (
    <div className="colorFooter text-white mb-0 mt-auto sticky-bottom">
      <div className="footer container py-3">
        <div className="d-flex justify-content-between">
          <h5>LOSI</h5>
          <p>Todos los derechos reservados </p>
        </div>
        <ul className="d-flex justify-content-between align-item-center ">
          <li>Home</li>
          <li>Productos</li>
          <li>Sobre el proyecto</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;

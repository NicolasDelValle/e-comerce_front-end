import "./css/homeStyles.css";
import React from "react";
import Tablas from "../img/productos/tablas";
import Hardware from "../img/productos/hardware";
import Ropa from "../img/productos/ropa";

function Shop(props) {
  return (
    <div className="container d-flex justify-content-center">
      <div id="Tablas" className="row">
        <h2>Tablas</h2>
        {/* category.map */}
        {Tablas.map((e) => (
          <div className="col">{Image}</div>
        ))}
      </div>
      <div id="Hardware" className="row">
        <h2>Hardware</h2>
        {/* category.map */}
        {Hardware.map((e) => (
          <div className="col">{e}</div>
        ))}
      </div>
      <div id="Ropa" className="row">
        <h2>Ropa</h2>
        {/* category.map */}
        {Ropa.map((e) => (
          <div className="col">{e}</div>
        ))}
      </div>
    </div>
  );
}

export default Shop;

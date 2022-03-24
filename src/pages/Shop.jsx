import "./css/homeStyles.css";
import React from "react";
import products from "../api/fakeApiObj";

function Shop(props) {
  return (
    <div className="container d-flex justify-content-center">
      <div id="Tablas" className="row">
        <h2>Tablas</h2>
        {/* category.map */}
        {products.tablas.map((e) => (
          <div className="col">{<img src={`${e}`} alt="tabla" />}</div>
        ))}
      </div>
      <div id="Hardware" className="row">
        <h2>Hardware</h2>
        {/* category.map */}
        {products.hardware.map((e) => (
          <div className="col">{<img src={`${e}`} alt="hardware" />}</div>
        ))}
      </div>
      <div id="Ropa" className="row">
        <h2>Ropa</h2>
        {/* category.map */}
        {products.ropa.map((e) => (
          <div className="col">{<img src={`${e}`} alt="ropa" />}</div>
        ))}
      </div>
    </div>
  );
}

export default Shop;

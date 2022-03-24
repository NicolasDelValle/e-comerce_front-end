import "./css/homeStyles.css";
import React from "react";
import tabla from "../img/productos/tablas/tabla3color.png";
import hardware from "../img/productos/hardware/bronsonbearing_720x@2x.png";
import ropa from "../img/productos/ropa/pant_marron_1.png";
import Navbar from "../components/Navbar";

function Shop(props) {
  return (
    <div className="container">
      <Navbar />
      <div id="Tablas" className="row m-3 g-3">
        <h2 className="mt-4">Tablas</h2>

        <div className="col p-5 rounded shadow">
          {<img src={`${tabla}`} alt="tabla" />}
        </div>
        <div className="col p-5 rounded shadow">
          {<img src={`${tabla}`} alt="tabla" />}
        </div>

        <div className="col p-5 rounded shadow">
          {<img src={`${tabla}`} alt="tabla" />}
        </div>
      </div>
      <div id="Hardware" className="row m-3 g-3">
        <h2 className="mt-4">Hardware</h2>
        <div className="col p-5 rounded shadow">
          {<img src={`${hardware}`} alt="tabla" />}
        </div>
        <div className="col p-5 rounded shadow">
          {<img src={`${hardware}`} alt="tabla" />}
        </div>
        <div className="col p-5 rounded shadow">
          {<img src={`${hardware}`} alt="tabla" />}
        </div>
      </div>
      <div id="Ropa" className="row m-3 g-3">
        <h2 className="mt-4">Ropa</h2>
        <div className="col p-5 rounded shadow">
          {<img src={`${ropa}`} alt="tabla" />}
        </div>
        <div className="col p-5 rounded shadow">
          {<img src={`${ropa}`} alt="tabla" />}
        </div>
        <div className="col p-5 rounded shadow">
          {<img src={`${ropa}`} alt="tabla" />}
        </div>
      </div>
    </div>
  );
}

export default Shop;

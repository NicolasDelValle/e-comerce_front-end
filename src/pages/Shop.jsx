import "./css/shopStyles.css";
import React from "react";
import tabla from "../img/productos/tablas/tabla3color.png";
import hardware from "../img/productos/hardware/bronsonbearing_720x@2x.png";
import ropa from "../img/productos/ropa/pant_marron_1.png";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

function Shop(props) {
  return (
    <div className="section">
      <NavigationBar />

      <div className="container">
        <div id="Tablas" className="row m-3 g-3">
          <h2 className="mt-4">Tablas</h2>

          <div className="col-md-4 p-5 h-75 rounded">
            {<img src={`${tabla}`} alt="tabla" />}
          </div>
          <div className="col-md-4 p-5 rounded">
            {<img src={`${tabla}`} alt="tabla" />}
          </div>

          <div className="col-md-4 p-5 rounded">
            {<img src={`${tabla}`} alt="tabla" />}
          </div>
        </div>
        <div id="Hardware" className="row m-3 g-3">
          <h2 className="mt-4">Hardware</h2>
          <div className="col-md-4 p-5 rounded">
            {<img src={`${hardware}`} alt="tabla" />}
          </div>
          <div className="col-md-4 p-5 rounded">
            {<img src={`${hardware}`} alt="tabla" />}
          </div>
          <div className="col-md-4 p-5 rounded">
            {<img src={`${hardware}`} alt="tabla" />}
          </div>
        </div>
        <div id="Ropa" className="row m-3 g-3">
          <h2 className="mt-4">Ropa</h2>
          <div className="col-md-4 p-5 rounded">
            {<img src={`${ropa}`} alt="tabla" />}
          </div>
          <div className="col-md-4 p-5 rounded">
            {<img src={`${ropa}`} alt="tabla" />}
          </div>
          <div className="col-md-4 p-5 rounded">
            {<img src={`${ropa}`} alt="tabla" />}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Shop;

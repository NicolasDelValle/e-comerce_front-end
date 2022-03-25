import "./shopStyles.css";
import React from "react";
import tabla from "../../img/productos/tablas/tabla3color.png";
import hardware from "../../img/productos/hardware/bronsonbearing_720x@2x.png";
import ropa from "../../img/productos/ropa/pant_marron_1.png";
import NavigationBar from "../../components/NavigationBar";
import Footer from "../../components/Footer";
import AddCart from "../../components/AddCart";

function Shop(props) {
  return (
    <>
      <NavigationBar className="bg-dark" />
      <div className="section">
        <div className="container">
          <div id="Tablas" className="row m-3 g-3">
            <h2 className="mt-4">Tablas</h2>

            <div className="col-md-4 h-75 rounded">
              {<img src={`${tabla}`} alt="tabla" />}

              <p>Nombre: Producto</p>
              <p>$ 800</p>
              <AddCart />
            </div>
            <div className="col-md-4 rounded">
              {<img src={`${tabla}`} alt="tabla" />}
              <p>Nombre: Producto</p>
              <p>$ 800</p>
              <AddCart />
            </div>

            <div className="col-md-4 rounded">
              {<img src={`${tabla}`} alt="tabla" />}
              <p>Nombre: Producto</p>
              <p>$ 800</p>
              <AddCart />
            </div>
          </div>
          <div id="Hardware" className="row m-3 g-3">
            <h2 className="mt-4">Hardware</h2>
            <div className="col-md-4 rounded">
              {<img src={`${hardware}`} alt="tabla" />}
              <p>Nombre: Producto</p>
              <p>$ 800</p>
              <AddCart />
            </div>
            <div className="col-md-4 rounded">
              {<img src={`${hardware}`} alt="tabla" />}
              <p>Nombre: Producto</p>
              <p>$ 800</p>
              <AddCart />
            </div>
            <div className="col-md-4 rounded">
              {<img src={`${hardware}`} alt="tabla" />}
              <p>Nombre: Producto</p>
              <p>$ 800</p>
              <AddCart />
            </div>
          </div>
          <div id="Ropa" className="row m-3 g-3">
            <h2 className="mt-4">Ropa</h2>
            <div className="col-md-4 rounded">
              {<img src={`${ropa}`} alt="tabla" />}
              <p>Nombre: Producto</p>
              <p>$ 800</p>
              <AddCart />
            </div>
            <div className="col-md-4 rounded">
              {<img src={`${ropa}`} alt="tabla" />}
              <p>Nombre: Producto</p>
              <p>$ 800</p>
              <AddCart />
            </div>
            <div className="col-md-4 rounded">
              {<img src={`${ropa}`} alt="tabla" />}
              <p>Nombre: Producto</p>
              <p>$ 800</p>
              <AddCart />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Shop;

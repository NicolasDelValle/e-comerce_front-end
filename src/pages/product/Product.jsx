import "./productStyles.css";
import React from "react";
import tabla from "../../img/productos/tablas/tabla3color.png";
import NavigationBar from "../../components/NavigationBar";
import Footer from "../../components/Footer";

function Product(props) {
  return (
    <div className="section">
      <NavigationBar />

      <div className="container">
        <div id="Product" className="row m-3 g-3">
          <h2 className="mt-4">Tablas</h2>

          <div className="col-md-8 p-5 h-75 rounded">
            {<img src={`${tabla}`} alt="tabla" />}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Product;

import "./productStyles.css";
import React, { useEffect, useState } from "react";
import NavigationBar from "../../components/NavigationBar";
import Footer from "../../components/Footer";
import axios from "axios";
import { useParams } from "react-router-dom";
import AddCart from "../../components/AddCart";

function Product(props) {
  const [product, setProduct] = useState([]);
  const { slug } = useParams();
  const [quantity, setQuantity] = useState([0]);

  const clickToAdd = () => {
    setQuantity((count) => count + 1);
  };

  const clickToSubtract = () => {
    setQuantity((count) => count - 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `http://localhost:4000/products/${slug}`
      );

      setProduct(data);

      return data;
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="section">
      <NavigationBar />

      <div className="container productSection">
        <div
          id="Product"
          className="row m-3 g-3 py-5 d-flex justify-content-md-center align-items-center"
        >
          <div id="ProductImg" className="col-md-6 px-5">
            <img src={product.imageUrl} alt="productImage" />
          </div>
          <div id="ProductInfo" className="col-md-3">
            <h2>{product.name}</h2>
            <h2 className="my-4">${product.price}</h2>
            <div className="my-4">
              <p>{product.description}</p>

              <div className="d-flex align-items-center ms-3">
                <button
                  className="btn btn-outline-dark"
                  onClick={clickToSubtract}
                >
                  <i className="bi bi-dash-lg"></i>
                </button>

                <h2 className="d-inline mx-2 my-0"> {quantity}</h2>

                <button className="btn btn-outline-dark" onClick={clickToAdd}>
                  <i className="bi bi-plus-lg"></i>
                </button>
              </div>
              <span className="mt-2 d-flex align-content-end">
                <AddCart />
              </span>
              <div id="detalles" className="mt-4">
                <h3>Detalles</h3>
                {product.details.map((detail) => (
                  <p className="detalles m-0">{detail}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Product;

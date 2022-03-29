import "./productStyles.css";
import React, { useEffect, useState } from "react";
import NavigationBar from "../../components/NavigationBar";
import Footer from "../../components/Footer";
import axios from "axios";
import { useParams } from "react-router-dom";

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
      console.log(product);
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
          <div id="ProductDescription" className="col-md-4">
            <h2>{product.name}</h2>
            <h2 className="my-4">${product.price}</h2>
            <div className="my-4">
              <p>{product.description}</p>

              <div className="d-flex align-items-center">
                <button
                  className="btn btn-outline-dark"
                  onClick={clickToSubtract}
                >
                  <i class="bi bi-dash-lg"></i>
                </button>

                <h2 className="d-inline mx-2 my-0"> {quantity}</h2>

                <button className="btn btn-outline-dark" onClick={clickToAdd}>
                  <i class="bi bi-plus-lg"></i>
                </button>
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

import "./productStyles.css";
import React, { useEffect, useState } from "react";
import NavigationBar from "../../components/NavigationBar";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import AddCart from "../../components/AddCart";
import { getProduct } from "../../api/productApi";

function Product(props) {
  const [product, setProduct] = useState(null);
  const { slug } = useParams();
  const [quantity, setQuantity] = useState(1);

  const clickToAdd = () => {
    setQuantity((count) => count + 1);
  };

  const clickToSubtract = () => {
    setQuantity((count) => count - 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await getProduct(slug);

      setProduct(response.data);
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
            <img src={product && product.imageUrl} alt="productImage" />
          </div>
          <div id="ProductInfo" className="col-md-3">
            <h2>{product && product.name}</h2>
            <h2 className="my-4">${product && product.price}</h2>
            <div className="my-4">
              <p>{product && product.description}</p>

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
                <AddCart product={product} quantity={quantity} />
              </span>
              <div id="detalles" className="mt-4">
                <h3>Detalles</h3>
                {product &&
                  product.details.map((detail, i) => (
                    <p key={i} className="detalles m-0">
                      {detail}
                    </p>
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

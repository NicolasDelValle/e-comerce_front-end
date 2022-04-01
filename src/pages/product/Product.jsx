import "./productStyles.css";
import React, { useEffect, useState } from "react";
import NavigationBar from "../../components/NavigationBar";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import AddCart from "../../components/AddCart";
import { getProduct } from "../../api/productApi";
import { Container, Row } from "react-bootstrap";
import ProductCard from "../../components/ProductCard";
import axios from "axios";

function Product(props) {
  const [product, setProduct] = useState(null);
  const { slug } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}products`,
      });

      setProducts(data);
    };
    getProducts();
  }, []);

  const handleIncrement = () => {
    setQuantity((count) => count + 1);
  };

  const handleDecrement = () => {
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
            <img
              src={product && product.imageUrl}
              className="img-fluid"
              alt="productImage"
            />
          </div>

          <div id="ProductInfo" className="col-md-3 shadow p-5 rounded">
            <h2>{product && product.name}</h2>
            <h3 className="my-4 text-black ">
              Precio: ${product && product.price}
            </h3>
            <div className="my-4">
              <p>{product && product.description}</p>

              <div>
                <div className="d-flex flex-row align-items-center rounded-pill border px-2 w-100">
                  <button
                    onClick={() => handleIncrement()}
                    className="text-secondary fs-5 me-1 border-0 rounded-pill bg-white"
                  >
                    +
                  </button>
                  <input
                    className=" text-center w-75 border-0 border-start-0 border-1 border-secondary"
                    type="number"
                    value={quantity}
                    onChange={() => quantity}
                  />
                  <button
                    onClick={() => handleDecrement()}
                    className="text-secondary fs-5 ms-1 border-0 rounded-pill bg-white"
                  >
                    -
                  </button>
                </div>
              </div>
              <span className="mt-2 d-flex align-content-end w-100">
                <AddCart product={product} quantity={quantity} />
              </span>
              <div id="detalles" className="mt-4">
                <h3 className="text-black">Detalles</h3>
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
      <Container className="py-5">
        <div>
          <div id="shop" className="border-bottom border-1">
            <h2>Otros Productos</h2>
          </div>
          <Row className="py-5 justify-content-center ">
            {products.map((product, i) => (
              <ProductCard key={i} product={product} />
            ))}
          </Row>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Product;

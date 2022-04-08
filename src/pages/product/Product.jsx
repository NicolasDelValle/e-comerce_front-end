import "./productStyles.css";
import React, { useEffect, useState } from "react";
import NavigationBar from "../../components/NavigationBar";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import { getProduct } from "../../api/productApi";
import { Row } from "react-bootstrap";
import ProductCard from "../../components/ProductCard";
import axios from "axios";
import actions from "../../redux/actions/cartActions";
import { useDispatch } from "react-redux";
import { Toast } from "react-bootstrap";

function Product() {
  const [product, setProduct] = useState(null);
  const { slug } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);

  const randomProducts = products.sort(() => 0.5 - Math.random());

  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    getProductBySlug();
    getProducts();
  }, []);

  const getProductBySlug = async () => {
    console.log("este es get product");
    const { data } = await getProduct(slug);
    setProduct(data);
  };

  const getProducts = async () => {
    const { data } = await axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}products`,
    });

    setProducts(data);
  };

  const handleIncrement = () => {
    setQuantity((count) => count + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity((count) => count - 1);
    }
  };

  const handleClick = () => {
    dispatch(actions.addToCart({ ...product, quantity }));
    setShow(true);
  };

  return (
    <>
      <NavigationBar />
      <div className="section">
        <div className="container productSection position-relative">
          <Toast
            className="position-absolute end-0"
            onClose={() => setShow(false)}
            show={show}
            delay={2000}
            autohide
          >
            <Toast.Body>
              {product && product.name} agregado al carrito
            </Toast.Body>
          </Toast>
          <div
            id="Product"
            className="row m-3 g-3 py-2
           d-flex justify-content-md-center align-items-center"
          >
            <div id="ProductImg" className="col-lg-6 px-5">
              <img
                // agregar supabaseurl para imagenes de la DB
                // src={product && `https://cybmmybwfbmxasdepuyj.supabase.co/storage/v1/object/public/images/${product.imageUrl}`}
                src={product && product.imageUrl}
                className="img-fluid"
                alt="productImage"
              />
            </div>

            <div id="ProductInfo" className="col-lg-3 shadow p-5 rounded">
              <h2>{product && product.name}</h2>
              <h3 className="my2 text-black ">
                Precio: ${product && product.price}
              </h3>
              <div className="my-2">
                <p>{product && product.description}</p>

                <div>
                  <div className="d-flex flex-row align-items-center rounded border px-2 ">
                    <button
                      onClick={() => handleDecrement()}
                      className="text-secondary fs-5 ms-1 border-0 rounded-pill bg-white"
                    >
                      -
                    </button>
                    <input
                      className=" text-center w-75 border-0 border-start-0 border-1 border-secondary"
                      type="number"
                      value={quantity}
                      onChange={() => quantity}
                    />
                    <button
                      onClick={() => handleIncrement()}
                      className="text-secondary fs-5 me-1 border-0 rounded-pill bg-white"
                    >
                      +
                    </button>
                  </div>
                </div>
                <span className="mt-2 d-flex align-content-end w-100">
                  <button
                    className="my-2 btn bg-black text-white w-auto rounded-pill"
                    onClick={() => handleClick()}
                    title="Agregar al carrito"
                  >
                    <p className="p-0 m-0"> Agregar al carrito</p>
                  </button>
                </span>
                <div id="detalles" className="mt-2">
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

          <div className="py-2">
            <div>
              <div className="border-bottom border-1">
                <h2>Otros Productos</h2>
              </div>
              <Row className="pt-3  justify-content-center ">
                {randomProducts.splice(0, 4).map((product, i) => (
                  <ProductCard key={i} product={product} />
                ))}
              </Row>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Product;

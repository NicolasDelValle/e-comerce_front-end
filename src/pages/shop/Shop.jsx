import "./shopStyles.css";
import { Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import NavigationBar from "../../components/NavigationBar";
import Footer from "../../components/Footer";
import AddCart from "../../components/AddCart";
import ProductCard from "../../components/ProductCard";
import axios from "axios";

function Shop(props) {
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

  // for (const key in products) {
  //   if (key.categoryId === 1) {
  //     setTablas(key);
  //   }
  //   if (key.categoryId === 2) {
  //     setRuedas(key);
  //   }
  //   if (key.categoryId === 3) {
  //     setHardware(key);
  //   } else {
  //     setRopa(key);
  //   }
  // }

  return (
    <>
      <NavigationBar className="bg-dark" />
      <div className="section">
        <div className="container">
          <div id="Tablas" className="row m-3 g-3">
            <h2 className="mt-4">Tablas</h2>
            <Row className="py-5 justify-content-center ">
              {/* <ProductCard key={i} product={product} /> */}
            </Row>
          </div>
          <div id="Hardware" className="row m-3 g-3">
            <h2 className="mt-4">Hardware</h2>
          </div>
          <div id="Ropa" className="row m-3 g-3">
            <h2 className="mt-4">Ropa</h2>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Shop;

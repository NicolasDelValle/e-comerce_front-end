import "./shopStyles.css";
import { Col, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import NavigationBar from "../../components/NavigationBar";
import Footer from "../../components/Footer";
import AddCart from "../../components/AddCart";
import ProductCard from "../../components/ProductCard";
import axios from "axios";

function Shop(props) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const { data } = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}categories`,
      });
      setCategories(data);
    };
    const getProducts = async () => {
      const { data } = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}products`,
      });
      setProducts(data);
    };
    getCategories();
    getProducts();
    console.log(categories);
    console.log(products);
  }, []);

  return (
    <>
      <NavigationBar className="bg-dark" />
      <div className="section">
        <div className="container">
          {categories.map((category) => (
            <div className="row m-3 g-3">
              <h2 className="mt-4">{category.name}</h2>
              {products
                .filter((product) => product.categoryId === category.id)
                .map((filteredProduct) => (
                  <ProductCard product={filteredProduct} />
                ))}{" "}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Shop;

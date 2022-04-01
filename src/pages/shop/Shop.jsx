import "./shopStyles.css";

import React, { useEffect, useState } from "react";
import NavigationBar from "../../components/NavigationBar";
import Footer from "../../components/Footer";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <NavigationBar className="bg-dark" />
      <div className="section">
        <div className="container product-category-section pt-3">
          {categories.map((category) => (
            <div className="row  d-flex justify-content-center">
              <h2 className="my-4">{category.name}</h2>
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

import "./shopStyles.css";
import { Form } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import NavigationBar from "../../components/NavigationBar";
import Footer from "../../components/Footer";

import ProductCard from "../../components/ProductCard";
import axios from "axios";

function Shop() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [apiCategories, setApiCategories] = useState([]);
  const [apiProducts, setApiProducts] = useState([]);
  const [itemTitle, setItemTitle] = useState("");

  useEffect(() => {
    const getCategories = async () => {
      const { data } = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}categories`,
      });
      setApiCategories(data);
      setCategories(data);
    };
    const getProducts = async () => {
      const { data } = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}products`,
      });
      setApiProducts(data);
      setProducts(data);
    };
    getCategories();
    getProducts();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChecked = (e) => {
    if (e) {
      setProducts(
        apiProducts.filter(
          (product) =>
            product.featured === true &&
            product.name.toLowerCase().includes(itemTitle)
        )
      );
    } else {
      setProducts(
        apiProducts.filter((product) =>
          product.name.toLowerCase().includes(itemTitle)
        )
      );
    }
  };

  const handleSearch = (e) => {
    setItemTitle(e);

    if (e !== "") {
      setProducts(
        apiProducts.filter((product) =>
          product.name.toLowerCase().includes(itemTitle)
        )
      );
    } else {
      setProducts(apiProducts);
      setCategories(apiCategories);
    }
  };

  return (
    <>
      <NavigationBar className="bg-dark" />
      <div className="section pb-5 mb-5">
        <div className="container product-category-section pt-3">
          <span className="row search mt-4 d-flex justify-content-center g-5">
            <span className="col-md-4 ">
              <input
                type="text"
                name="search"
                className=" w-100 py-2"
                value={itemTitle}
                placeholder="¿Qué estás buscando?"
                id=""
                onChange={(e) => {
                  handleSearch(e.target.value.toLowerCase());
                }}
              />
              <Form.Check
                className="mt-3"
                label="Filtrar por destacados"
                disabled={false}
                onChange={(e) => handleChecked(e.target.checked)}
                type="switch"
                name="featuredProduct"
                id="custom-switch"
              />
            </span>
          </span>

          {categories.map(
            (category, i) =>
              products.some(
                (product) => product.categoryId === category.id
              ) && (
                <div key={i} className="row  d-flex  category mb-5">
                  <h2 className="mt-3">{category.name}</h2>
                  {products
                    .filter((product) => product.categoryId === category.id)
                    .map((filteredProduct) => (
                      <ProductCard
                        key={filteredProduct.id}
                        product={filteredProduct}
                      />
                    ))}
                </div>
              )
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Shop;

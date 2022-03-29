import "./productStyles.css";
import React, { useEffect, useState } from "react";
import NavigationBar from "../../components/NavigationBar";
import Footer from "../../components/Footer";
import axios from "axios";
import { useParams } from "react-router-dom";

function Product(props) {
  const [product, setProduct] = useState([]);
  const { slug } = useParams();

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

      <div className="container">
        <div id="Product" className="row m-3 g-3">
          <div id="ProductImg" className="col-md-6">
            <img src={product.imageUrl} alt="productImage" />
          </div>
          <div id="ProductDescription" className="col-md-6">
            <h2>{product.name}</h2>
            <h2>${product.price}</h2>
            <div>{product.description}</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Product;

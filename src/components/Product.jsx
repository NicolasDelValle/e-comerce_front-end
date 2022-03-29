import React from "react";
import { Col } from "react-bootstrap";
import AddCart from "./AddCart";
import "./css/Product.css";
function Product({ product }) {
  return (
    <>
      <Col className="productCard m-3 py-3">
        <img
          className="d-block mx-auto"
          width="120px"
          height="440"
          src={product.imageUrl}
          alt={product.name}
        />
        <p className="product-info">{product.name}</p>
        <p className="product-info">${product.price}</p>
        <AddCart />
      </Col>
    </>
  );
}

export default Product;

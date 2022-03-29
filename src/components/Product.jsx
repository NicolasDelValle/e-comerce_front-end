import React from "react";
import { Col } from "react-bootstrap";
import AddCart from "./AddCart";

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
        <p>Nombre: {product.name}</p>
        <p>$ {product.price}</p>
        <AddCart />
      </Col>
    </>
  );
}

export default Product;

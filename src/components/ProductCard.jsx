import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import AddCart from "./AddCart";
import "./css/ProductCard.css";
function ProductCard({ product }) {
  return (
    <>
      <Col className="productCard">
        <Link to={`/products/${product.slug}`}>
          <div className="card p-1 text-black">
            <span className="py-2">
              <img
                className="w-auto mb-2"
                height="220px"
                src={product.imageUrl}
                alt={product.name}
              />
              <p className="product-info">
                <strong>{product.name}</strong>
              </p>
              <p className="product-info">
                <strong>${product.price}</strong>
              </p>
              <AddCart />
            </span>
          </div>
        </Link>
      </Col>
    </>
  );
}

export default ProductCard;

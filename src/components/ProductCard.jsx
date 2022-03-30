import { useState } from "react";
import { Col, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import AddCart from "./AddCart";
import "./css/ProductCard.css";
function ProductCard({ product }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Col className="productCard">
        {isLoading && (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
        <Link to={`/products/${product.slug}`}>
          <div className="card p-1 text-black">
            <span className="py-2">
              <img
                className={isLoading ? "d-none" : "w-auto mb-2"}
                height="220px"
                src={product.imageUrl}
                alt={product.name}
                onLoad={() => setIsLoading(false)}
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

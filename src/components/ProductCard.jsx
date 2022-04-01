import { useState } from "react";
import { Col, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import DetailsButton from "./DetailsButton";
import "./css/ProductCard.css";
function ProductCard({ product }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Col md={5} lg={3} className="productCard rounded mb-5">
        <Link to={`/products/${product.slug}`}>
          <div className=" p-1 text-black">
            <span className="py-2" min-height="220px">
              {isLoading && (
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              )}
              <img
                className={isLoading ? "d-none" : "w-auto mb-2"}
                height="220px"
                src={product.imageUrl}
                alt={product.name}
                onLoad={() => setIsLoading(false)}
              />
              <p className="product-info mt-2">
                <strong>{product.name}</strong>
              </p>
              <p className="product-info">
                <strong>${product.price}</strong>
              </p>
              <DetailsButton />
            </span>
          </div>
        </Link>
      </Col>
    </>
  );
}

export default ProductCard;

import { FaCcVisa, FaCcMastercard, FaCcPaypal } from "react-icons/fa";
import { FcLock } from "react-icons/fc";
import { Container, Row, Col, Button } from "react-bootstrap";
import NavigationBar from "../../components/NavigationBar";
import CheckOutItem from "../../components/CheckOutItem";
import Footer from "../../components/Footer";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import React from "react";
import "./checkOut.css";

function CheckOut() {
  const { cart, user } = useSelector((state) => state);
  const subTotalCost = cart.reduce(function (prev, product) {
    return prev + Number(product.price) * product.quantity;
  }, 0);

  const total = subTotalCost * 1.21;
  const taxes = total - subTotalCost;

  return (
    <>
      <NavigationBar />
      <Container className="mt-5">
        <Row className="d-flex justify-content-center">
          <Col md={12} lg={7} className="pe-lg-0"></Col>
          <Col md={12} lg={5}>
            <div className="border p-3 mb-3">
              <div className="border-start border-3 border-dark d-flex flex-column align-items-start mb-2 bg-light">
                {cart.map((product, i) => (
                  <CheckOutItem
                    key={i}
                    url={product.imageUrl}
                    price={product.price}
                    mountProp={product.quantity}
                    name={product.name}
                    stock={product.stock}
                    productId={product.id}
                  />
                ))}
              </div>
              <div className="d-flex align-items-start">
                <span className="fs-6 fw-light">Subtotal</span>
                <span className="fs-6 me-1 ms-auto">${subTotalCost}</span>
              </div>
              <div className="d-flex align-items-start mb-2">
                <span className="fs-6 fw-light">IVA</span>
                <span className="fs-6 ms-auto me-1">${taxes.toFixed(2)}</span>
              </div>
              <div className="d-flex align-items-start py-1 my-2 border-top">
                <span className="fs-5 fw-light">Total</span>
                <span className="fs-5 fw-bold ms-auto me-1">
                  ${total.toFixed(2)}
                </span>
              </div>
              <div>
                <Link to={user.newToken ? /*indicar ruta */ "" : "/login"}>
                  <Button
                    className="rounded-pill w-100 px-auto py-1 text-decoration-none"
                    variant="dark"
                    size="lg"
                  >
                    Comprar
                  </Button>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default CheckOut;

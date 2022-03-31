import React from "react";
import Footer from "../../components/Footer";
import { Container, Row, Col, Button } from "react-bootstrap";
import NavigationBar from "../../components/NavigationBar";
import "./checkOut.css";
import CartItem from "../../components/CartItem";
import { useSelector } from "react-redux";

function CheckOut() {
  const cart = useSelector((state) => state.cart);
  const SubTotalCost = cart.reduce(function (prev, product) {
    return prev + Number(product.price) * product.quantity;
  }, 0);

  const total = SubTotalCost * 1.21;

  return (
    <>
      <NavigationBar />
      <Container className="mt-5">
        <Row className="d-flex justify-content-center">
          <Col md={12} lg={6} className="pe-lg-0">
            {cart.map((product, i) => (
              <CartItem
                key={i}
                url={product.imageUrl}
                price={product.price}
                mountProp={product.quantity}
                name={product.name}
                stock={product.stack}
                productId={product.id}
              />
            ))}
          </Col>
          <Col md={12} lg={4}>
            <div className="border p-3 mb-3">
              <div className="border-bottom d-flex align-items-start mb-2 fs-5 fw-bold">
                <span>TOTAL DEL CARRITO</span>
              </div>
              <div className="d-flex align-items-start mb-2">
                <span>Subtotal</span>
                <span className="fs-4 ms-auto">{SubTotalCost}</span>
              </div>
              <div className="d-flex align-items-start mb-2">
                <span>Total</span>
                <span className="fs-4 ms-auto">{total}</span>
              </div>
              <div>
                <Button
                  className="rounded-pill w-100 px-auto py-1"
                  variant="dark"
                  size="lg"
                >
                  Finalizar Compra
                </Button>
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

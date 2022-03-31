import React from "react";
import Footer from "../../components/Footer";
import { Container, Table, Row, Col, Button } from "react-bootstrap";
import NavigationBar from "../../components/NavigationBar";
import "./checkOut.css";
import CartItem from "../../components/CartItem";

function CheckOut() {
  return (
    <>
      <NavigationBar />
      <Container className="mt-5">
        <Row>
          <Col md={12} lg={8} className="pe-lg-0">
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </Col>
          <Col md={12} lg={4}>
            <div className="border p-3 mb-3">
              <div className="border-bottom d-flex align-items-start mb-2 fs-5 fw-bold">
                <span>TOTAL DEL CARRITO</span>
              </div>
              <div className="d-flex align-items-start mb-2">
                <span>Subtotal</span>
                <span className="fs-4 ms-auto">$5000</span>
              </div>
              <div className="d-flex align-items-start mb-2">
                <span>Total</span>
                <span className="fs-4 ms-auto">$5000000</span>
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

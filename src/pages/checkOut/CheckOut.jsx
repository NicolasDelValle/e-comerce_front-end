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
            <CartItem
              url="https://cybmmybwfbmxasdepuyj.supabase.co/storage/v1/object/public/images/hardware/tornillos.png"
              price="10"
              mountProp="10"
              name="Tornillos"
              stock="20"
            />
            <CartItem
              url="https://cybmmybwfbmxasdepuyj.supabase.co/storage/v1/object/public/images/ropa/Pant_negro_1.png"
              price="80"
              mountProp="4"
              name="Pantalon Gostoso"
              stock="10"
            />
            <CartItem
              url="https://cybmmybwfbmxasdepuyj.supabase.co/storage/v1/object/public/images/hardware/176578197_1041929339671235_4247878052830658536_n.jpg"
              price="3000"
              mountProp="12"
              name="Rueditas Facheras"
              stock="20"
            />
            <CartItem
              url="https://cybmmybwfbmxasdepuyj.supabase.co/storage/v1/object/public/images/tablas/tabla2.png"
              price="35000"
              mountProp="2"
              name="Patinete DRIIIIP"
              stock="5"
            />
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

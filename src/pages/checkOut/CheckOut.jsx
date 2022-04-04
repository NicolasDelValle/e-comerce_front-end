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
  const SubTotalCost = cart.reduce(function (prev, product) {
    return prev + Number(product.price) * product.quantity;
  }, 0);

  const total = SubTotalCost * 1.21;

  return (
    <>
      <NavigationBar />
      <Container className="mt-5">
        <Row className="d-flex justify-content-center">
          <Col md={12} lg={7} className="pe-lg-0"></Col>
          <Col md={12} lg={5}>
            <div className="border p-3 mb-3">
              <div className="border-bottom d-flex align-items-start mb-2 fs-5 fw-bold">
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
              <div className="d-flex align-items-start mb-2">
                <span>Subtotal</span>
                <span className="fs-4 ms-auto">{SubTotalCost}</span>
              </div>
              <div className="d-flex align-items-start mb-2">
                <span>Total</span>
                <span className="fs-4 ms-auto">{total}</span>
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
              <div className="d-flex pt-4 justify-content-between">
                <div className=" align-items-center justify-content-end">
                  <FcLock size={25} />
                  {/* <FaLock size={25}  /> */}
                </div>
                <div className=" align-items-center justify-content-end">
                  <FaCcVisa size={30} className="ms-1" />
                  <FaCcMastercard size={30} className="ms-1" />
                  <FaCcPaypal size={30} className="ms-1" />
                </div>
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

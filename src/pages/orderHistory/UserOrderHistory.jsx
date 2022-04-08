import React from "react";
import NavigationBar from "../../components/NavigationBar";

import { Col, Container, Row, Button, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUserOrders } from "../../api/orderApi";
export const UserOrderHistory = (props) => {
  const user = useSelector((state) => state.user);

  const handleGetOrders = async () => {
    const orders = await getUserOrders(user.newToken);
    console.log(orders);
  };
  return (
    <>
      <NavigationBar />
      <Container className="mt-3 px-lg-5">
        <div>
          <span>Total de cuenta</span>
          <span>$44022</span>
        </div>
        <span className="w-100 me-auto d-flex fs-4 fw-light">Historial</span>
        <div>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <div className="d-flex flex-column w-100 border-end me-3">
                  <div className="w-100 d-flex align-items-center ">
                    <span className="">19/12/11</span>

                    <span className="mx-auto fw-light text-secondary--">
                      Calle 1, 233
                    </span>
                    <span className=" fs-4 fw-bold  me-3">$4404</span>
                  </div>
                  <div className=" d-flex align-items-center ">
                    <span className="me-auto badge rounded-pill bg-success">
                      Recibido
                    </span>
                    <span className="me-3 fw-light text-secondary">
                      id: 3211
                    </span>
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="d-flex flex-column">
                  <div className="d-flex flex-column bg-light ps-1 py-1 border-start border-4 border-dark">
                    <div className="w-100 d-flex">
                      <span className="fs-6 fw-bold me-1">x4</span>
                      <span className="fs-6">Tabla re linda </span>
                      <span className="fs-6 fw-bold ms-auto">$5000</span>
                    </div>
                    <div className="w-100 d-flex">
                      <span className="fs-6 fw-bold me-1">x4</span>
                      <span className="fs-6">Tabla re linda </span>
                      <span className="fs-6 fw-bold ms-auto">$5000</span>
                    </div>
                    <div className="w-100 d-flex">
                      <span className="fs-6 fw-bold me-1">x4</span>
                      <span className="fs-6">Tabla re linda </span>
                      <span className="fs-6 fw-bold ms-auto">$5000</span>
                    </div>
                  </div>
                  <div className="w-100 d-flex mt-1">
                    <span className="fs-5 fw-light">IVA</span>
                    <span className="fs-5 fw-bold ms-auto">$500</span>
                  </div>
                  <div className="w-100 d-flex">
                    <span className="fs-5 fw-light">Subtotal</span>
                    <span className="fs-5 fw-bold ms-auto">$5000</span>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </Container>
    </>
  );
};

export default UserOrderHistory;

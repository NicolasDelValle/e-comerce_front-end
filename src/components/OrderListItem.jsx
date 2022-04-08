import React from "react";
import { Accordion } from "react-bootstrap";
export const OrderListItem = ({ id, date, total, address, productList }) => {
  return (
    <>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <div className="d-flex flex-column w-100 border-end me-3">
              <div className="w-100 d-flex align-items-center ">
                <span className="">{date}</span>

                <span className="mx-auto fw-light text-secondary--">
                  {address}
                </span>
                <span className=" fs-4 fw-bold  me-3">${total}</span>
              </div>
              <div className=" d-flex align-items-center ">
                <span className="me-auto badge rounded-pill bg-success">
                  Recibido
                </span>
                <span className="me-3 fw-light text-secondary">id: {id}</span>
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
    </>
  );
};

export default OrderListItem;

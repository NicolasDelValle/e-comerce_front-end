import React from "react";
import { Accordion } from "react-bootstrap";
export const OrderListItem = ({
  id,
  date,
  total,
  address,
  productList,
  status,
}) => {
  const iva = Number(total) * 0.21;
  const subTotal = Number(total) - iva;
  return (
    <>
      <Accordion className="mb-2">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <div className="d-flex flex-column w-100 border-end me-3">
              <div className="w-100 d-flex align-items-center ">
                <span className="">{date}</span>

                <span className="mx-auto fw-light text-secondary d-none d-lg-flex">
                  {address}
                </span>
                <span className=" fs-4 fw-bold ms-auto ms-lg-1  me-3">
                  ${total}
                </span>
              </div>
              <div className=" d-flex align-items-center ">
                {status === "Procesando" ? (
                  <span className="me-auto badge rounded-pill bg-secondary">
                    {status}
                  </span>
                ) : (
                  <></>
                )}
                {status === "Enviado" ? (
                  <span className="me-auto badge rounded-pill bg-warning">
                    {status}
                  </span>
                ) : (
                  <></>
                )}
                {status === "Recibido" ? (
                  <span className="me-auto badge rounded-pill bg-success">
                    {status}
                  </span>
                ) : (
                  <></>
                )}

                <span className="me-3 fw-light text-secondary">id: {id}</span>
              </div>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <div className="d-flex flex-column">
              <span className="me-auto fw-bold d-flex d-lg-none">
                Direccion:
              </span>
              <span className="text-start me-auto mb-2 text-secondary d-flex d-lg-none">
                {address}
              </span>

              <div className="d-flex flex-column bg-light ps-1 py-1 border-start border-4 border-dark">
                {productList.map((product) => (
                  <div className="w-100 d-flex">
                    <span className="fs-6 fw-bold me-1">
                      x{product.quantity}
                    </span>
                    <span className="fs-6">{product.name}</span>
                    <span className="fs-6 fw-bold ms-auto">
                      ${product.price}
                    </span>
                  </div>
                ))}
              </div>
              <div className="w-100 d-flex mt-1">
                <span className="fs-5 fw-light">IVA</span>
                <span className="fs-5 fw-bold ms-auto">${iva}</span>
              </div>
              <div className="w-100 d-flex">
                <span className="fs-5 fw-light">Subtotal</span>
                <span className="fs-5 fw-bold ms-auto">
                  ${Math.ceil(subTotal)}
                </span>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default OrderListItem;

import React from "react";
import Footer from "../../components/Footer";
import NavigationBar from "../../components/NavigationBar";
import "./checkOut.css";
import CartItem from "../../components/CartItem";
import { Accordion } from "react-bootstrap";
import { Card } from "react-bootstrap";

function CheckOut() {
  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = React.useAccordionButton(eventKey, () =>
      console.log("totally custom!")
    );

    return (
      <button
        type="button"
        style={{ backgroundColor: "pink" }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }

  function Example() {
    return (
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <CustomToggle eventKey="0">Click me!</CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <CustomToggle eventKey="1">Click me!</CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }

  // render(<Example />);

  const [open, setOpen] = React.useState(false);

function CheckOut() {

  return (
    <>
      <NavigationBar />
      <div className="checkout-main-container pt-5">
        <div className="checkout-main-content">
          <div className="checkout-main-product-container">
            <CartItem />
            <div className="checkout-main-purchase">
              <h2>TOTAL</h2>
              <h2>$100000</h2>
            </div>
          </div>
          <div className="checkout-main-payment">
            <div className="checkout-main-payment-body">
              <form action="">
                <div className="payment-option">
                  <div className="checkout-main-payment-header">
                    <h3>OPCIONES DE PAGO</h3>
                  </div>
                  <div className="payment-option-toggle">
                    <input
                      type="radio"
                      name="payment-option"
                      id="wire-transfer"
                    />
                    <label htmlFor="wire-transfer">
                      TRANSFERENCIA BANCARIA
                    </label>
                    <div className="payment-option-input">
                      <label htmlFor="wire-transfer-bank">BANCO</label>
                      <select name="wire-transfer-bank" id="wire-transfer-bank">
                        <option value="DEFAULT" selected disabled>
                          Seleccionar
                        </option>
                        <option value="BROU">Banco República</option>
                        <option value="SANTANDER">Banco Santander</option>
                        <option value="SCOTIA-BANK">Scotia Bank</option>
                      </select>
                    </div>
                    <div className="payment-option-input">
                      <label htmlFor="wire-transfer-account-number">
                        NÚMERO DE CUENTA
                      </label>
                      <input type="number" />
                    </div>
                  </div>
                  <div className="payment-option-toggle">
                    <input
                      type="radio"
                      name="payment-option"
                      id="credit-card"
                    />
                    <label htmlFor="credit-card">TARJETA DE CRÉDITO</label>
                    <div className="payment-option-input">
                      <label htmlFor="credit-card-number">
                        NÚMERO DE TARJETA
                      </label>
                      <input
                        type="number"
                        name="credit-card-number"
                        id="credit-card-number"
                      />
                      <label htmlFor="credit-card-owner">
                        NOMBRE Y APELLIDO DEL TITULAR
                      </label>
                      <input
                        type="text"
                        name="credit-card-owner"
                        id="credit-card-owner"
                      />
                      <label htmlFor="credit-card-expiration">
                        FECHA DE VENCIMIENTO
                      </label>
                      <input
                        type="date"
                        name="credit-card-expiration"
                        id="credit-card-expiration"
                      />
                      <label htmlFor="credit-card-security-code">
                        CÓDIGO DE SEGURIDAD
                      </label>
                      <input type="number" />
                    </div>
                  </div>
                </div>
                <div className="payment-option">
                  <div className="checkout-main-payment-header">
                    <h3>DETALLES DE FACTURACIÓN</h3>
                  </div>
                  <div className="payment-option-input">
                    <label htmlFor="fullname">NOMBRE Y APELLIDO</label>
                    <input type="text" />
                    <label htmlFor="phone-number">TELÉFONO</label>
                    <input type="tel" name="phone-number" id="phone-number" />
                    <label htmlFor="email">
                      DIRECCIÓN DE CORREO ELECTRÓNICO
                    </label>
                    <input type="email" />
                    <label htmlFor="address">
                      DIRECCIÓN{" "}
                      <small className="address-small">
                        calle, número de puerta y esquina
                      </small>
                    </label>
                    <input type="text" />
                  </div>
                </div>
                <div className="checkout-main-payment-confirm">
                  <button className="checkout-main-payment-confirm-button">
                    CONFIRMAR COMPRA
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default CheckOut;

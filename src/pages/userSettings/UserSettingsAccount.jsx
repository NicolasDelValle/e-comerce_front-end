import React from "react";
import NavigationBar from "../../components/NavigationBar";

import { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const UserSettingsAccount = (props) => {
  return (
    <>
      <NavigationBar />
      <Container className="mt-3 px-lg-5">
        <Row className="d-flex justify-content-center px-lg-5">
          <Col lg={12} className="border-bottom mb-3">
            <div className="d-flex flex-column align-items-start fs-3">
              <span>Ajustes</span>
            </div>
          </Col>
          <Col md={2}>
            <div className="d-flex flex-md-column align-items-start mb-2">
              <Link className="my-2" to="/settings/account">
                <span className="text-dark me-3">Cuenta</span>
              </Link>
              <Link className="my-2" to="/settings/address">
                <span className="text-dark me-3">Dirrecciones</span>
              </Link>
            </div>
          </Col>
          <Col md={10} className="d-flex align-itmes-start">
            <div className="d-flex flex-column align-items-start p-3 border rounded">
              <span className="fs-4 mb-3">Cuenta</span>
              <div className="d-flex flex-row pb-3 ">
                <div className="me-2 d-flex flex-column justify-content-start">
                  <span className="me-auto fw-light">Nombre</span>
                  <input className="border rounded p-1 " type="text" />
                </div>
                <div className=" d-flex flex-column justify-content-start">
                  <span className="me-auto fw-light">Apellido</span>
                  <input className="border rounded p-1" type="text" />
                </div>
              </div>

              <div>
                <div className="d-flex flex-column justify-content-start mb-3">
                  <span className="me-auto fw-light">E-mail</span>
                  <input className="border rounded p-1" type="text" />
                </div>
              </div>
              <div>
                <div className="d-flex flex-column justify-content-start mb-5">
                  <span className="me-auto fw-light">Contraseña</span>
                  <input className="border rounded p-1" type="text" />
                </div>
              </div>
              <div className="d-flex flex-column align-items-start">
                <span className="mb-2 text-start bg-warning px-3 fw-light">
                  Esta opción deshabilitara tu cuenta y no volverás a tener
                  acceso a tus datos, LOSI seguirá teniendo tus datos de compra.
                </span>
                <Button className="rounded-pill" variant="dark">
                  Darse de Baja
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserSettingsAccount;

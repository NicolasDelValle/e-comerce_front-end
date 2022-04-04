import { useEffect, useState } from "react";
import NavigationBar from "../../components/NavigationBar";

import { Col, Container, Row, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getAdresses, postAdress } from "../../api/adressApi";
import { useSelector } from "react-redux";

export const UserSettingsAdress = (props) => {
  const dep = [
    "Artigas",
    "Canelones",
    "Cerro Largo",
    "Colonia",
    "Durazno",
    "Flores",
    "Florida",
    "Lavalleja",
    "Maldonado",
    "Montevideo",
    "Paysandú",
    "Rio Negro",
    "Rivera",
    "Rocha",
    "Salto",
    "San José",
    "Soriano",
    "Tacuarembó",
    "Treinta y Tres",
  ];
  const { newToken } = useSelector((state) => state.user);
  const [adresses, setAdresses] = useState();
  useEffect(() => {
    const asyncAdresses = async () => {
      const adresses = await getAdresses(newToken);
      setAdresses(adresses.data);
    };
    asyncAdresses();
  }, []);
  console.log(adresses);
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
              <Link className="my-2" to="/settings/adress">
                <span className="text-dark me-3">Dirrecciones</span>
              </Link>
              <Link className="my-2" to="/settings/payment">
                <span className="text-dark me-3">Pagos</span>
              </Link>
            </div>
          </Col>
          <Col md={10} className="d-flex align-itmes-start">
            <div className="d-flex flex-column align-items-start p-3 border rounded w-100">
              <span className="fs-4 mb-3">Direcciones</span>
              <div className="d-flex flex-column justify-content-start mb-3">
                <span className="me-auto fw-light">Nombre*</span>
                <input className="border rounded p-1" type="text" />
              </div>
              <Row className="w-100">
                <Col className="pe-auto" xl={8} lg={10} md={12} sm={12}>
                  <div className="border p-3 w-100">
                    <div className="d-flex flex-column justify-content-start mb-2">
                      <span className="me-auto fw-light">Departamento*</span>
                      <select className="border rounded p-1" name="" id="">
                        {dep.map((dep) => (
                          <option value={dep}>{dep}</option>
                        ))}
                      </select>
                    </div>
                    <div className="d-flex flex-column justify-content-start mb-2">
                      <span className="me-auto fw-light">Ciudad*</span>
                      <input className="border rounded p-1" type="text" />
                    </div>
                    <div className="d-flex flex-column justify-content-start mb-2">
                      <span className="me-auto fw-light">Direccion 1*</span>
                      <div className="d-flex flex-column justify-content-start mb-2">
                        <input
                          className="border rounded p-1 mb-1"
                          type="text"
                        />
                        <span className="me-auto fw-light">Direccion 2</span>
                        <input className="border rounded p-1" type="text" />
                      </div>
                    </div>

                    <div className=" d-flex flex-column flex-sm-row ">
                      <div className="w-100 d-flex flex-column justify-content-start mb-2 me-sm-2">
                        <span className="me-auto fw-light">Numero*</span>
                        <input className="border rounded p-1" type="text" />
                      </div>
                      <div className="w-100 d-flex flex-column justify-content-start mb-2">
                        <span className="me-auto fw-light">Codigo Postal*</span>
                        <input className="border rounded p-1" type="text" />
                      </div>
                    </div>
                    <div>
                      <button className="my-1 rounded-pill border d-flex flex-row align-items-center text-success fw-bold">
                        <i className="bi bi-plus-circle-dotted me-1 fs-6"></i>
                        <span>Agregar Direccion</span>
                      </button>
                    </div>
                  </div>
                </Col>
                <Col lg={4} className="p-0 m-0"></Col>
              </Row>

              <div>
                <span className="fs-5 mb-3">Direcciones Registradas</span>
              </div>
              <div className="w-100">
                <ListGroup>
                  <ListGroup.Item>
                    <div>
                      <span></span>
                      <span></span>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                  <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                  <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserSettingsAdress;

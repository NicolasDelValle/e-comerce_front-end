import { useEffect, useState } from "react";
import NavigationBar from "../../components/NavigationBar";

import { Col, Container, Row, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getAddresses, postAddress } from "../../api/addressApi";
import { useSelector } from "react-redux";

export const UserSettingsAddress = (props) => {
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
  const [addresses, setAddresses] = useState();
  useEffect(() => {
    const asyncAddresses = async () => {
      const addresses = await getAddresses(newToken);
      setAddresses(addresses.data);
    };
    asyncAddresses();
  }, []);
  console.log(addresses);
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
              <Link className="my-2" to="/settings/payment">
                <span className="text-dark me-3">Pagos</span>
              </Link>
            </div>
          </Col>
          <Col md={10} className="d-flex align-itmes-start">
            <div className="d-flex flex-column align-items-start p-3 border rounded w-100">
              <span className="fs-4 mb-3">Direcciones</span>

              <div className="w-100 ">
                <div className="border rounded-3 p-3 w-100">
                  <div className="d-flex flex-column justify-content-start mb-3">
                    <span className="me-auto fw-light">Nombre*</span>
                    <input className="border rounded p-1 me-auto" type="text" />
                  </div>
                  <div className="d-flex flex-column flex-md-row">
                    <div className=" w-100 d-flex flex-column justify-content-start mb-2 me-sm-2">
                      <span className="me-auto fw-light">Departamento*</span>
                      <select className="border rounded p-1" name="" id="">
                        {dep.map((dep) => (
                          <option value={dep}>{dep}</option>
                        ))}
                      </select>
                    </div>
                    <div className="w-100 d-flex flex-column justify-content-start mb-2">
                      <span className="me-auto fw-light">Ciudad*</span>
                      <input className="border rounded p-1" type="text" />
                    </div>
                  </div>
                  <div className="d-flex flex-column justify-content-start mb-2">
                    <span className="me-auto fw-light">Direccion 1*</span>
                    <div className="d-flex flex-column justify-content-start mb-2">
                      <input className="border rounded p-1 mb-1" type="text" />
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
              </div>

              <div>
                <span className="fs-5 mb-3">Direcciones Registradas</span>
              </div>
              <div className="w-100 d-flex flex-row border rounded-3  mb-2">
                <div className="d-flex align-items-center">
                  <i className="bi bi-geo-alt fs-4 mx-2 "></i>
                </div>
                <div className="w-100">
                  <div className="w-100 mx-1 d-flex flex-column justify-content-center align-items-start">
                    <div>
                      <span className="fw-bold fs-6">Casa</span>
                    </div>
                    <div className="d-flex flex-row align-items-start me-auto my-1">
                      <span className="fw-light pe-1">
                        Luis albeto de herrera y juansito perez, 335
                        Montevideo,Montevideo 11900
                      </span>
                    </div>
                    <div>
                      <button className="my-1 rounded-pill border d-flex flex-row align-items-center text-danger fw-bold">
                        <i className="bi bi-trash me-1"></i>
                        <span>Eliminar</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-100 d-flex flex-row border rounded-3">
                <div className="d-flex align-items-center">
                  <i className="bi bi-geo-alt fs-4 mx-2 "></i>
                </div>
                <div className="w-100">
                  <div className="w-100 mx-1 d-flex flex-column justify-content-center align-items-start">
                    <div>
                      <span className="fw-bold fs-6">Casa</span>
                    </div>
                    <div className="d-flex flex-row align-items-start me-auto my-1">
                      <span className="fw-light pe-1">
                        Luis albeto de herrera y juansito perez,
                      </span>
                      <span className="fw-light pe-1">335</span>
                      <span className="fw-light pe-1">
                        Montevideo,Montevideo
                      </span>
                      <span className="mx-auto">11900</span>
                    </div>
                    <div>
                      <button className="my-1 rounded-pill border d-flex flex-row align-items-center text-danger fw-bold">
                        <i className="bi bi-trash me-1"></i>
                        <span>Eliminar</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserSettingsAddress;

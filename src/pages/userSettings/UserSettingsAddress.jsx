import { useEffect, useState } from "react";
import NavigationBar from "../../components/NavigationBar";

import { Col, Container, Row, Toast, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getAddresses, postAddress } from "../../api/addressApi";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../redux/actions/adressActions";
import AddressListItem from "../../components/AddressListItem";

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
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [addresses, setAddresses] = useState(
    useSelector((state) => state.address)
  );
  const [name, setName] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [show, setShow] = useState(false);

  const handleGetAddresses = async () => {
    const addresses = await getAddresses(user.newToken);
    setAddresses(addresses.data);
    dispatch(actions.addAddresses(addresses.data));
  };

  useEffect(() => {
    handleGetAddresses();
  }, []);

  const handleCreateAddress = async () => {
    if (
      name === "" ||
      state === "" ||
      city === "" ||
      address === "" ||
      number === "" ||
      postalCode === ""
    ) {
      setShow(true);
    } else {
      await postAddress(
        { name, state, city, address, number, postalCode, userId: user.id },
        user.newToken
      );
      setName("");
      setState("");
      setCity("");
      setAddress("");
      setNumber("");
      setPostalCode("");
      handleGetAddresses();
    }
  };

  return (
    <>
      <NavigationBar />
      <Container className="mt-3 px-lg-5 position-relative">
        <Toast
          className="position-absolute end-0 me-2"
          onClose={() => setShow(false)}
          show={show}
          delay={5000}
          autohide
        >
          <Toast.Header>
            <strong className="me-auto">Advertencia</strong>
          </Toast.Header>
          <Toast.Body>
            Tiene que completar los campos para agregara una nueva dirección
          </Toast.Body>
        </Toast>
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
            <div className="d-flex flex-column align-items-start p-3 border rounded w-100">
              <span className="fs-4 mb-3">Direcciones</span>

              <div className="w-100 ">
                <div className="border rounded-3 p-3 w-100">
                  <div className="d-flex flex-column justify-content-start mb-3">
                    <span className="me-auto fw-light">Nombre*</span>
                    <input
                      onInput={(e) => setName(e.target.value)}
                      value={name}
                      className="border rounded p-1 me-auto"
                      type="text"
                    />
                  </div>
                  <div className="d-flex flex-column flex-md-row">
                    <div className=" w-100 d-flex flex-column justify-content-start mb-2 me-sm-2">
                      <span className="me-auto fw-light">Departamento*</span>
                      <select
                        onChange={(e) => setState(e.target.value)}
                        className="border rounded p-1"
                      >
                        <option name="">Seleccione un Departamento</option>
                        {dep.map((dep) => (
                          <option value={dep}>{dep}</option>
                        ))}
                      </select>
                    </div>
                    <div className="w-100 d-flex flex-column justify-content-start mb-2">
                      <span className="me-auto fw-light">Ciudad*</span>
                      <input
                        onInput={(e) => setCity(e.target.value)}
                        value={city}
                        className="border rounded p-1"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="d-flex flex-column justify-content-start mb-2">
                    <span className="me-auto fw-light">Direccion*</span>

                    <input
                      onInput={(e) => setAddress(e.target.value)}
                      value={address}
                      className="border rounded p-1 mb-1"
                      type="text"
                    />
                  </div>

                  <div className=" d-flex flex-column flex-sm-row ">
                    <div className="w-100 d-flex flex-column justify-content-start mb-2 me-sm-2">
                      <span className="me-auto fw-light">Numero*</span>
                      <input
                        onInput={(e) => setNumber(e.target.value)}
                        value={number}
                        className="border rounded p-1"
                        type="text"
                      />
                    </div>
                    <div className="w-100 d-flex flex-column justify-content-start mb-2">
                      <span className="me-auto fw-light">Codigo Postal*</span>
                      <input
                        onInput={(e) => setPostalCode(e.target.value)}
                        value={postalCode}
                        className="border rounded p-1"
                        type="text"
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={() => handleCreateAddress()}
                      className="my-1 rounded-pill border d-flex flex-row align-items-center text-success fw-bold"
                    >
                      <i className="bi bi-plus-circle-dotted me-1 fs-6"></i>
                      <span>Agregar Direccion</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="my-3">
                <span className="fs-5">Direcciones Registradas</span>
              </div>
              {addresses?.map((address) => (
                <AddressListItem
                  id={address.id}
                  name={address.name}
                  state={address.state}
                  city={address.city}
                  adress={address.address}
                  number={address.number}
                  postalCode={address.postalCode}
                  reloadAddresses={() => handleGetAddresses()}
                />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserSettingsAddress;

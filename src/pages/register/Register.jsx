import { Button, Form } from "react-bootstrap";
import NavigationBar from "../../components/NavigationBar";
import actions from "../../redux/actions/userActions";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import axios from "axios";
import "./register.css";

function Register() {
  const [userRegister, setUserRegister] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegister = async (e) => {
    e.preventDefault();

    const { data } = await axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}users`,
      data: userRegister,
    });

    if (data) {
      dispatch(actions.createUser(data));
      navigate("/login");
    }
  };

  return (
    <>
      <NavigationBar />
      <div className="container">
        <div className="row pt-5">
          <div className="col-6 d-none d-xl-flex register-main-logo"></div>
          <div className="col-xl-6 ">
            <h4>
              <strong>REGISTRO</strong>
            </h4>
            <Form
              className="row text-start"
              onSubmit={(e) => handleRegister(e)}
            >
              <Form.Group className="col-md-4 ">
                <Form.Label className="form-label my-2" htmlFor="firstname">
                  Nombre
                </Form.Label>
                <Form.Control
                  required
                  className="form-control "
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="Nombre"
                  onChange={(e) => {
                    setUserRegister({
                      ...userRegister,
                      firstname: e.target.value,
                    });
                  }}
                />
              </Form.Group>
              <Form.Group className="col-md-4  ">
                <Form.Label className="form-label my-2" htmlFor="lastname">
                  Apellido
                </Form.Label>
                <Form.Control
                  required
                  placeholder="Apellido"
                  className="form-control "
                  type="text"
                  name="lastname"
                  id="lastname"
                  onChange={(e) => {
                    setUserRegister({
                      ...userRegister,
                      lastname: e.target.value,
                    });
                  }}
                />
              </Form.Group>
              <Form.Group className="col-md-4  ">
                <Form.Label className="form-label my-2" htmlFor="number">
                  Teléfono
                </Form.Label>
                <Form.Control
                  required
                  placeholder="Teléfono"
                  className="form-control "
                  type="number"
                  name="number"
                  id="number"
                  onChange={(e) => {
                    setUserRegister({
                      ...userRegister,
                      number: e.target.value,
                    });
                  }}
                />
              </Form.Group>
              <Form.Group className="col-md-6  ">
                <Form.Label className="form-label my-2" htmlFor="email">
                  Email
                </Form.Label>
                <Form.Control
                  required
                  placeholder="E-mail"
                  className="form-control "
                  type="email"
                  name="email"
                  id="email"
                  onChange={(e) => {
                    setUserRegister({
                      ...userRegister,
                      email: e.target.value,
                    });
                  }}
                />
              </Form.Group>
              <Form.Group className="col-md-6">
                <Form.Label className="form-label my-2" htmlFor="password">
                  Contraseña
                </Form.Label>
                <Form.Control
                  required
                  placeholder="Contraseña"
                  className="form-control "
                  type="password"
                  name="password"
                  id="password"
                  onChange={(e) => {
                    setUserRegister({
                      ...userRegister,
                      password: e.target.value,
                    });
                  }}
                />
                {userRegister.password === "" && <p>Error</p>}
              </Form.Group>
              <Form.Group className="">
                <Form.Label className="form-label my-2" htmlFor="address">
                  Dirección
                </Form.Label>
                <Form.Control
                  required
                  placeholder="Dirección"
                  className="form-control "
                  type="text"
                  name="address"
                  id="address"
                  onChange={(e) => {
                    setUserRegister({
                      ...userRegister,
                      address: e.target.value,
                    });
                  }}
                />
              </Form.Group>
              <Button
                type="submit"
                className="w-auto bg-black text-white fs-6  mt-4 mx-auto btn rounded-pill"
              >
                Registrarme
              </Button>
            </Form>
            <p className="mt-3">
              ¿Ya tienes una cuenta?
              <Link className="text-black ps-2" to="/login">
                Iniciar sesión
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;

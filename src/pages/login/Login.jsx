import { Button, Form, Toast, ToastContainer } from "react-bootstrap";
import NavigationBar from "../../components/NavigationBar";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../redux/actions/userActions";
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./login.css";

function Login() {
  const [errorInicioSesion, setErrorInicioSesion] = useState(false);
  const accessToken = useSelector((state) => state.user.newToken);
  const [userLogin, setUserLogin] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}tokens`,
        data: userLogin,
      });
      if (data) {
        dispatch(actions.createUser(data));
        navigate("/");
      }
    } catch (error) {
      setErrorInicioSesion((prev) => !prev);
    }
  };

  return (
    <>
      <NavigationBar />
      <div className="container pt-5 mt-5">
        <div className="row">
          <div className="col col-lg-6  m-auto  bg-white">
            <div className="login-main-header text-center ">
              <h1>
                <strong className="fs-4">LOGIN</strong>
              </h1>
            </div>
            <div className="login-form-container">
              <Form onSubmit={(e) => handleLogin(e)} className="py-1">
                <div className="">
                  <Form.Group className="py-2 d-flex flex-column">
                    <Form.Label
                      className="form-label text-start"
                      htmlFor="email"
                    >
                      Email
                    </Form.Label>
                    <Form.Control
                      required
                      className="form-control"
                      type="email"
                      name="email"
                      id="email"
                      onChange={(e) => {
                        setUserLogin({ ...userLogin, email: e.target.value });
                      }}
                      placeholder="Escribe tu E-mail"
                    />

                    {/* <Form.Control.Feedback type="invalid">
                      Por favor ingresa tu email
                    </Form.Control.Feedback> */}
                  </Form.Group>
                  <Form.Group className="py-2">
                    <Form.Label
                      className="form-label text-start"
                      htmlFor="password"
                    >
                      Contraseña
                    </Form.Label>
                    <Form.Control
                      required
                      className="form-control"
                      type="password"
                      name="password"
                      id="password"
                      onChange={(e) => {
                        setUserLogin({
                          ...userLogin,
                          password: e.target.value,
                        });
                      }}
                      placeholder="Contraseña"
                    />

                    {/* <Form.Control.Feedback type="invalid">
                      Por favor ingresa tu contraseña
                    </Form.Control.Feedback> */}
                  </Form.Group>
                </div>
                <Button
                  type="submit"
                  className="login-form-confirm btn rounded-pill bg-black text-white mt-2 mx-auto w-50 fs-6"
                >
                  Ingresar
                </Button>
              </Form>
              <p className="mt-3">
                ¿No tienes una cuenta?
                <Link className="text-black ps-1" to="/register">
                  Regístrate
                </Link>
              </p>
            </div>
            {errorInicioSesion && (
              <ToastContainer
                className=" position-absolute "
                position={"bottom-center"}
              >
                <Toast className="bg-white">
                  <div className="text-end pe-2 pt-1 ">
                    <button
                      className="btn"
                      onClick={() => setErrorInicioSesion((prev) => !prev)}
                    >
                      X
                    </button>
                  </div>
                  <Toast.Body className="">
                    <h6 className="fs-6">
                      El usuario y/o contraseña ingresados no son correctos, por
                      favor corrobore.
                    </h6>
                  </Toast.Body>
                  <button
                    onClick={() => setErrorInicioSesion((prev) => !prev)}
                    className="btn boton m-2 mx-auto"
                  >
                    Intentar nuevamente
                  </button>
                </Toast>
              </ToastContainer>
            )}
          </div>
          <div className="col-lg-6 d-none d-xl-flex login-main-logo m-auto"></div>
        </div>
      </div>
    </>
  );
}

export default Login;

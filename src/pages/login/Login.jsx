import { Button, Form, Toast, ToastContainer } from "react-bootstrap";
import NavigationBar from "../../components/NavigationBar";
import actions from "../../redux/actions/userActions";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import "./login.css";
import { useForm } from "react-hook-form";

function Login() {
  const accessToken = useSelector((state) => state.user.newToken);
  const [errorInicioSesion, setErrorInicioSesion] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const patronEmail = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (accessToken) {
      navigate("/");
    }
  }, [accessToken, navigate]);

  const handlerLogin = async (formData) => {
    const { data } = await axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}tokens`,
      data: formData,
    });
    if (data) {
      dispatch(actions.createUser(data));
      navigate("/");
    }
  };

  return (
    <>
      <NavigationBar />
      <div className="container pt-5 mt-5">
        <div className="row">
          <div className="col col-lg-6 m-auto bg-white">
            <h1>
              <strong className="fs-4 text-center">LOGIN</strong>
            </h1>
            <div>
              <Form onSubmit={handleSubmit(handlerLogin)} className="py-1 ">
                <Form.Group className="py-2 text-start">
                  <Form.Label className="form-label" htmlFor="email">
                    Email
                  </Form.Label>
                  <Form.Control
                    className="form-control"
                    type="email"
                    {...register("email", {
                      required: true,
                      pattern: patronEmail,
                    })}
                    id="email"
                    placeholder="Escribe tu E-mail"
                    defaultValue={"admin@mail.com"}
                  />
                  {errors.email && (
                    <div className=" text-center">
                      <span className="mt-1 pt-2 text-danger">
                        Este campo es requerido
                      </span>
                    </div>
                  )}
                </Form.Group>
                <Form.Group className="py-2 text-start">
                  <Form.Label className="form-label" htmlFor="password">
                    Contraseña
                  </Form.Label>
                  <Form.Control
                    className="form-control"
                    type="password"
                    {...register("password", { required: true })}
                    id="password"
                    placeholder="Contraseña"
                    defaultValue={"1234"}
                  />
                  {errors.password && (
                    <div className=" text-center">
                      <span className="pt-2 text-danger">
                        Este campo es requerido
                      </span>
                    </div>
                  )}
                </Form.Group>

                <Button
                  title="Iniciar sesión"
                  type="submit"
                  className="btn rounded-pill bg-black text-white mt-2 mx-auto w-auto px-4 fs-6"
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
                className="position-absolute"
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
                  <Toast.Body>
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

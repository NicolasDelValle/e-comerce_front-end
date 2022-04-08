import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";
import axios from "axios";
import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../redux/actions/userActions";
import NavigationBar from "../../components/NavigationBar";
import { Toast, ToastContainer } from "react-bootstrap";

function Login() {
  const accessToken = useSelector((state) => state.user.newToken);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userLogin, setUserLogin] = useState({});
  const [errorInicioSesion, seterrorInicioSesion] = useState(false);

  useEffect(() => {
    if (accessToken) {
      navigate("/");
    }
  }, [accessToken, navigate]);

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
      }
    } catch (error) {
      seterrorInicioSesion((prev) => !prev);
      console.log("hola");
    }
  };
  return (
    <div className="d-flex flex-column ">
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
              <form
                onSubmit={(e) => handleLogin(e)}
                className="d-flex flex-column py-1"
              >
                <div className=" d-flex flex-column">
                  <div className="py-2 d-flex flex-column">
                    <label className="form-label text-start" htmlFor="email">
                      Email
                    </label>
                    <input
                      defaultValue="admin@mail.com"
                      className="form-control"
                      type="email"
                      name="email"
                      id="email"
                      onChange={(e) => {
                        setUserLogin({ ...userLogin, email: e.target.value });
                      }}
                      placeholder="Escribe tu E-mail"
                    />
                  </div>
                  <div className="py-2 d-flex flex-column">
                    <label className="form-label text-start" htmlFor="password">
                      Contraseña
                    </label>
                    <input
                      defaultValue="1234"
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
                  </div>
                </div>
                <button
                  type="submit"
                  className="login-form-confirm btn rounded-pill bg-black text-white mt-2 mx-auto w-50 fs-6"
                >
                  Ingresar
                </button>
              </form>
              <p className="mt-3">
                ¿No tienes una cuenta?
                <Link className="text-black ps-1" to="/register">
                  Regístrate
                </Link>
              </p>
            </div>
            {errorInicioSesion && (
              <ToastContainer
                className="p-3 position-absolute "
                position={"middle-center"}
              >
                <Toast className="bg-white">
                  <div className="text-end pe-2 pt-1 ">
                    <button
                      className="btn"
                      onClick={() => seterrorInicioSesion((prev) => !prev)}
                    >
                      X
                    </button>
                  </div>
                  <Toast.Body className="p-5">
                    <h6>A ocurrido un error.</h6>
                  </Toast.Body>
                  <button
                    onClick={() => seterrorInicioSesion((prev) => !prev)}
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
    </div>
  );
}

export default Login;

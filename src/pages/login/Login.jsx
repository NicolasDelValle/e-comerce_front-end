import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../redux/actions/userActions";
import NavigationBar from "../../components/NavigationBar";

function Login() {
  const accessToken = useSelector((state) => state.user.newToken);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userLogin, setUserLogin] = useState({});
  const [prueba, setPrueba] = useState(false);

  useEffect(() => {
    if (accessToken) {
      navigate("/");
    }
  }, [accessToken, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    const { data } = await axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}tokens`,
      data: userLogin,
    });

    if (data) {
      dispatch(actions.createUser(data));
    } else {
      setPrueba((prev) => !prev);
      console.log("hola");
    }
  };
  return (
    <div className="d-flex flex-column ">
      <NavigationBar />
      <div className="login-main d-flex">
        <div className="login-main-container m-auto d-flex flex-column justify-content-center mx-auto bg-white">
          <div className="login-main-header d-flex justify-content-center">
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
                <div className="login-form-data-unit d-flex flex-column">
                  <label className="form-label text-start" htmlFor="email">
                    Email
                  </label>
                  <input
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
                <div className="login-form-data-unit d-flex flex-column">
                  <label className="form-label text-start" htmlFor="password">
                    Contraseña
                  </label>
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    id="password"
                    onChange={(e) => {
                      setUserLogin({ ...userLogin, password: e.target.value });
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
        </div>
        <div className="login-main-logo m-auto"></div>
      </div>
    </div>
  );
}

export default Login;

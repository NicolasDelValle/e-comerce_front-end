import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../redux/actions/userActions";

function Login() {
  const accessToken = useSelector((state) => state.user.newToken);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userLogin, setUserLogin] = useState({});

  useEffect(() => {
    if (accessToken) {
      navigate("/");
    }
  }, [accessToken, navigate]);

  const handleLogin = async () => {
    const { data } = await axios({
      method: "post",
      url: "http://localhost:4000/tokens",
      data: userLogin,
    });

    if (data) {
      dispatch(actions.createUser(data));
    }
  };
  return (
    <div className="login">
      <div className="login-back">
        <span>
          <Link to="/">
            <i className="bi bi-arrow-left me-1"></i> VOLVER
          </Link>
        </span>
      </div>
      <div className="login-main">
        <div className="login-main-container">
          <div className="login-main-header">
            <h1>LOGIN</h1>
          </div>
          <div className="login-form-container">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleLogin();
              }}
            >
              <div className="login-form-data">
                <div className="login-form-data-unit">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={(e) => {
                      setUserLogin({ ...userLogin, email: e.target.value });
                    }}
                    placeholder="Escribe tu E-mail"
                  />
                </div>
                <div className="login-form-data-unit">
                  <label htmlFor="password">Contraseña</label>
                  <input
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
                className="login-form-confirm btn rounded-pill"
              >
                Ingresar
              </button>
            </form>
          </div>
        </div>
        <div className="login-main-logo"></div>
      </div>
    </div>
  );
}

export default Login;

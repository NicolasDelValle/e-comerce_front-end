import { Link, useNavigate } from "react-router-dom";
import "./register.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../redux/actions/userActions";

function Register() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [userRegister, setUserRegister] = useState({});

  // useEffect(() => {
  //   if (user.user !== {}) {
  //     navigate("/login");
  //   }
  //   // if (!user) {
  //   //   navigate("/register");
  //   // }
  // }, [user, navigate]);

  const handleRegister = async () => {
    const { data } = await axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}users`,
      data: userRegister,
    });

    if (data) {
      dispatch(actions.createUser(data));
    }
  };

  return (
    <div className="register">
      <div className="register-back">
        <span>
          <Link to="/">
            <i className="bi bi-arrow-left me-1"></i>Volver
          </Link>
        </span>
      </div>
      <div className="register-main">
        <div className="register-main-logo"></div>
        <div className="register-main-container">
          <div className="register-main-header">
            <h1>REGISTRO</h1>
          </div>
          <div className="register-form-container">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleRegister();
              }}
            >
              <div className="register-form-data">
                <div className="register-form-data-unit">
                  <label htmlFor="firstname">Nombre</label>
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    onChange={(e) => {
                      setUserRegister({
                        ...userRegister,
                        firstname: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="register-form-data-unit">
                  <label htmlFor="lastname">Apellido</label>
                  <input
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
                </div>
              </div>
              <div className="register-form-data">
                <div className="register-form-data-unit">
                  <label htmlFor="email">Email</label>
                  <input
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
                </div>
                <div className="register-form-data-unit">
                  <label htmlFor="address">Dirección</label>
                  <input
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
                </div>
              </div>
              <div className="register-form-data">
                <div className="register-form-data-unit">
                  <label htmlFor="number">Teléfono</label>
                  <input
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
                </div>
                <div className="register-form-data-unit">
                  <label htmlFor="password">Contraseña</label>
                  <input
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
                </div>
              </div>
              <button
                type="submit"
                className="register-form-confirm btn rounded-pill"
              >
                Confirmar registro
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

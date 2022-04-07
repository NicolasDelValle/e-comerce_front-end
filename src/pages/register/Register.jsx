import { useNavigate, Link } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar";
import "./register.css";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import actions from "../../redux/actions/userActions";
import { Toast, ToastContainer } from "react-bootstrap";

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userRegister, setUserRegister] = useState({});
  const [errorInicioSesion, seterrorInicioSesion] = useState(false);

  const handleRegister = async () => {
    try {
      const { data } = await axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}users`,
        data: userRegister,
      });

      if (data) {
        dispatch(actions.createUser(data));
        navigate("/login");
      }
    } catch (error) {
      seterrorInicioSesion((prev) => !prev);
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

            <form
              className="row text-start"
              onSubmit={(e) => {
                e.preventDefault();
                handleRegister();
              }}
            >
              <div className="col-md-4 ">
                <label className="form-label my-2" htmlFor="firstname">
                  Nombre
                </label>
                <input
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
              </div>
              <div className="col-md-4  ">
                <label className="form-label my-2" htmlFor="lastname">
                  Apellido
                </label>
                <input
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
              </div>
              <div className="col-md-4  ">
                <label className="form-label my-2" htmlFor="number">
                  Teléfono
                </label>
                <input
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
              </div>
              <div className="col-md-6  ">
                <label className="form-label my-2" htmlFor="email">
                  Email
                </label>
                <input
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
              </div>

              <div className="col-md-6">
                <label className="form-label my-2" htmlFor="password">
                  Contraseña
                </label>
                <input
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
              </div>
              <div className="">
                <label className="form-label my-2" htmlFor="address">
                  Dirección
                </label>
                <input
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
              </div>

              <button
                type="submit"
                className="w-auto bg-black text-white fs-6  mt-4 mx-auto btn rounded-pill"
              >
                Registrarme
              </button>
            </form>
            <p className="mt-3">
              ¿Ya tienes una cuenta?
              <Link className="text-black ps-2" to="/login">
                Iniciar sesión
              </Link>
            </p>
          </div>
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
    </>
  );
}

export default Register;

import { Button, Form } from "react-bootstrap";
import NavigationBar from "../../components/NavigationBar";
import actions from "../../redux/actions/userActions";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import axios from "axios";
import "./register.css";
import { useForm } from "react-hook-form";

function Register() {
  const [userRegister, setUserRegister] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const patronEmail = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = async (formData) => {
    const { data } = await axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}users`,
      data: formData,
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
              onSubmit={handleSubmit(handleRegister)}
            >
              <Form.Group className="col-md-4 ">
                <Form.Label className="form-label my-2" htmlFor="firstname">
                  Nombre
                </Form.Label>
                <Form.Control
                  className="form-control"
                  type="text"
                  {...register("firstname", {
                    required: true,
                  })}
                  id="firstname"
                  placeholder="Nombre"
                />
                {errors.firstname && (
                  <div className=" text-center">
                    <span className="mt-1 pt-2 text-danger">
                      Este campo es requerido
                    </span>
                  </div>
                )}
              </Form.Group>
              <Form.Group className="col-md-4  ">
                <Form.Label className="form-label my-2" htmlFor="lastname">
                  Apellido
                </Form.Label>
                <Form.Control
                  placeholder="Apellido"
                  className="form-control "
                  type="text"
                  {...register("lastname", {
                    required: true,
                  })}
                  id="lastname"
                />
                {errors.lastname && (
                  <div className=" text-center">
                    <span className="mt-1 pt-2 text-danger">
                      Este campo es requerido
                    </span>
                  </div>
                )}
              </Form.Group>
              <Form.Group className="col-md-4  ">
                <Form.Label className="form-label my-2" htmlFor="number">
                  Teléfono
                </Form.Label>
                <Form.Control
                  placeholder="Teléfono"
                  className="form-control "
                  type="number"
                  {...register("number", { required: true })}
                  id="number"
                />
                {errors.number && (
                  <div className=" text-center">
                    <span className="pt-2 text-danger">
                      Este campo es requerido
                    </span>
                  </div>
                )}
              </Form.Group>
              <Form.Group className="col-md-6  ">
                <Form.Label className="form-label my-2" htmlFor="email">
                  Email
                </Form.Label>
                <Form.Control
                  placeholder="E-mail"
                  className="form-control "
                  type="email"
                  {...register("email", {
                    required: true,
                    pattern: patronEmail,
                  })}
                  id="email"
                />
                {errors.email && (
                  <div className=" text-center">
                    <span className="mt-1 pt-2 text-danger">
                      Este campo es requerido
                    </span>
                  </div>
                )}
              </Form.Group>
              <Form.Group className="col-md-6">
                <Form.Label className="form-label my-2" htmlFor="password">
                  Contraseña
                </Form.Label>
                <Form.Control
                  placeholder="Contraseña"
                  className="form-control "
                  type="password"
                  {...register("password", { required: true })}
                  id="password"
                />
                {errors.password && (
                  <div className=" text-center">
                    <span className="mt-1 pt-2 text-danger">
                      Este campo es requerido
                    </span>
                  </div>
                )}
              </Form.Group>
              <Form.Group className="">
                <Form.Label className="form-label my-2" htmlFor="address">
                  Dirección
                </Form.Label>
                <Form.Control
                  placeholder="Dirección"
                  className="form-control "
                  type="text"
                  {...register("address", { required: true })}
                  id="address"
                />
                {errors.address && (
                  <div className=" text-center">
                    <span className="pt-2 text-danger">
                      Este campo es requerido
                    </span>
                  </div>
                )}
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

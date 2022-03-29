import { Link } from "react-router-dom";
import "./register.css";

function Register() {
  return(
      <div className="register">
        <div className="register-back">
        <span><Link to="/"><i className="bi bi-arrow-left me-1"></i>VOLVER</Link></span>
        </div>
        <div className="register-main">
          <div className="register-main-logo">
          </div>
          <div className="register-main-container">
            <div className="register-main-header">
              <h1>REGISTRO</h1>
            </div>
            <div className="register-form-container">
              <form action="">
                <div className="register-form-data">
                  <div className="register-form-data-unit">
                    <label htmlFor="firstname">Nombre</label>
                    <input type="text" name="firstname" id="firstname"/>
                  </div>
                  <div className="register-form-data-unit">
                    <label htmlFor="lastname">Apellido</label>
                    <input type="text" name="lastname" id="lastname" />
                  </div>
                </div>
                <div className="register-form-data">
                  <div className="register-form-data-unit">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                  </div>
                  <div className="register-form-data-unit">
                    <label htmlFor="address">Dirección</label>
                    <input type="text" name="address" id="address" />
                  </div>
                </div>
                <div className="register-form-data">
                  <div className="register-form-data-unit">
                    <label htmlFor="number">Teléfono</label>
                    <input type="number" name="number" id="number" />
                  </div>
                  <div className="register-form-data-unit">
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" name="password" id="password" />
                  </div>
                </div>
                <button type="submit" className="register-form-confirm btn rounded-pill">Confirmar registro</button>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Register;
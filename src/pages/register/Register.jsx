import { Link } from "react-router-dom";
import "./register.css";

function Register() {
  return(
    <div className="register-background">
      <div className="register-main-container">
        <div className="register-main-header">
          {/* <span><i class="bi bi-arrow-left-short"></i></span> */}
          <span><Link to="/">VOLVER</Link></span>
          <h1>REGISTRO</h1>
          <span></span>
        </div>
        <div className="register-form-container">
          <form action="">
            <div className="register-form-data">
              <div className="register-form-data-unit">
                <label htmlFor="firstname">NOMBRE</label>
                <input type="text" name="firstname" id="firstname" />
              </div>
              <div className="register-form-data-unit">
                <label htmlFor="lastname">APELLIDO</label>
                <input type="text" name="lastname" id="lastname" />
              </div>
            </div>
            <div className="register-form-data">
              <div className="register-form-data-unit">
                <label htmlFor="email">EMAIL</label>
                <input type="email" name="email" id="email" />
              </div>
              <div className="register-form-data-unit">
                <label htmlFor="address">DIRECCIÓN</label>
                <input type="text" name="address" id="address" />
              </div>
            </div>
            <div className="register-form-data">
              <div className="register-form-data-unit">
                <label htmlFor="number">TELÉFONO</label>
                <input type="number" name="number" id="number" />
              </div>
              <div className="register-form-data-unit">
                <label htmlFor="password">CONTRASEÑA</label>
                <input type="password" name="password" id="password" />
              </div>
            </div>
            <button type="submit" className="register-form-confirm">CONFIRMAR REGISTRO</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
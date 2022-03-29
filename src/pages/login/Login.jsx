import { Link } from "react-router-dom";
import "./login.css";

function Login() {
  return(
    <div className="login">
      <div className="login-back">
        <span><Link to="/"><i className="bi bi-arrow-left me-1"></i>VOLVER</Link></span>
      </div>
      <div className="login-main">
        <div className="login-main-container">
          <div className="login-main-header">
            <h1>LOGIN</h1>
          </div>
          <div className="login-form-container">
            <form action="">
              <div className="login-form-data">
                <div className="login-form-data-unit">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" />
                </div>
                <div className="login-form-data-unit">
                  <label htmlFor="password">Contraseña</label>
                  <input type="password" name="password" id="password" />
                </div>
              </div>
              <button type="submit" className="login-form-confirm btn rounded-pill">Ingresar</button>
            </form>
          </div>
        </div>
        <div className="login-main-logo">
        </div>
      </div>
    </div>
  );
}

export default Login;
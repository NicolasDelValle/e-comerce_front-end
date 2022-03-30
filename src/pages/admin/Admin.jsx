import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./admin.css";

function Admin () {

  const mainMenu = <> <div className="admin-main-menu">Menú Principal</div> </> ;

  const productsList = <> <div className="admin-main-products-list">Lista de Productos</div> </> ;

  const usersList = <> <div className="admin-main-menu-users-list">Lista de Usuarios</div> </> ;

  const [showSidebar, setShowSidebar] = useState(false);
  const [pageContent, setPageContent] = useState(mainMenu);

  return(
    <div className="admin">
      <div className="admin-back">
        <span><Link to="/"><i className="bi bi-arrow-left me-1"></i>VOLVER</Link></span>
        <Button 
          variant="dark"
          className="ms-1"
          onClick={() => setShowSidebar((actual) => !actual)}><i className="bi bi-list"></i></Button>
        <h1>LOSI Administración</h1>
      </div>
      <div className="admin-main">
      <div className={showSidebar ? "admin-main-sidebar" : "admin-main-sidebar-hidden" }>
        <div className={showSidebar ? "admin-main-sidebar-option" : "admin-main-sidebar-option-d-none"}>
          <h2>Inicio</h2>
          <p onClick={() => setPageContent(mainMenu)}>Menú Principal</p>
        </div>
        <div className={showSidebar ? "admin-main-sidebar-option" : "admin-main-sidebar-option-d-none"}>
          <h3>Productos</h3>
          <p onClick={() => setPageContent(productsList)}>Lista de Productos</p>
        </div>
        <div className={showSidebar ? "admin-main-sidebar-option" : "admin-main-sidebar-option-d-none"}>
          <h3>Usuarios</h3>
          <p onClick={() => setPageContent(usersList)}>Lista de Usuarios</p>
        </div>
      </div>
        <div className="admin-main-content">{pageContent}</div>
      </div>
    </div>
  )
}

export default Admin;


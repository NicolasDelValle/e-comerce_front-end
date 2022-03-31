import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

import "./admin.css";
import BackNavbar from "../../components/BackNavbar";
import AdminProducts from "./AdminProducts";

function Admin() {
	const [showSidebar, setShowSidebar] = useState(false);

	return (
		<div className="admin">
			<BackNavbar
				addOns={
					<>
						<Button
							variant="dark"
							className="admin-dropdown-button"
							onClick={() => setShowSidebar((actual) => !actual)}
						>
							<i className="bi bi-list"></i>
						</Button>
						<h1>Administración</h1>
					</>
				}
			/>
			<div className="admin-main">
				<div
					className={
						showSidebar ? "admin-main-sidebar" : "admin-main-sidebar-hidden"
					}
				>
					<div className="admin-main-sidebar-option">
						<h2>Inicio</h2>
						<Link to="/admin">Menú Principal</Link>
					</div>
					<div className="admin-main-sidebar-option">
						<h3>Productos</h3>
						<Link to="/admin/products">Lista de Productos</Link>
					</div>
					<div className="admin-main-sidebar-option">
						<h3>Usuarios</h3>
						<Link to="/admin/users">Lista de Usuarios</Link>
					</div>
					<div className="admin-main-sidebar-user">
						<p>Administrador:</p>
						<p>Pepe González</p>
					</div>
				</div>
				<div className="admin-main-home">
					<Button>Hola</Button>
				</div>
			</div>
		</div>
	);
}

export default Admin;

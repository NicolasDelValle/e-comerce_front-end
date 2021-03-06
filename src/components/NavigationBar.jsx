import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, Container, Navbar } from "react-bootstrap";
import "./css/NavigationBar.css";
import logoBlanco from "../img/logos/logoBlanco.png";
import { useDispatch, useSelector } from "react-redux";
import actions from "../redux/actions/userActions";

function NavigationBar() {
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);
	const user = useSelector((state) => state.user);

	const CustomToggle = React.forwardRef(({ onClick }, ref) => (
		<a
			className="d-flex align-items-center mx-2 me-1 pe-0 "
			ref={ref}
			onClick={(e) => {
				e.preventDefault();
				onClick(e);
			}}
		>
			<i
				title="Perfil del usuario"
				className="bi bi-person-circle fs-5 d-flex me-1"
			></i>

			<i className="bi bi-chevron-down pt-1"></i>
		</a>
	));

	const totalItemsCart = cart.reduce(function (prev, product) {
		return prev + Number(product.quantity);
	}, 0);

	return (
		<>
			<Navbar className="bg-black">
				<Container className="d-flex justify-content-between align-items-center py-3">
					<Link
						title="Página principal"
						className="wLogoContainer d-flex justify-content-center p-0 m-0 border-none"
						to="/"
					>
						<img
							className="wLogoContainer-logo me-auto"
							src={logoBlanco}
							alt="Logo"
						/>
					</Link>

					<div className="ms-auto text-white d-flex justify-content-between align-items-center">
						{/*SI YA SE LOGUE CON EL NOMBRE Y TODO */}

						<Link
							title="Tienda"
							to={"/shop"}
							className="px-2 text-white text-decoration-none d-flex justify-content-between align-items-center"
						>
							<i className="bi bi-shop-window fs-6 d-flex d-sm-none"></i>
							<span className="d-none d-sm-flex">Tienda</span>
						</Link>
						<Link
							to={"/about"}
							title="Nosotros"
							className="px-2 text-white text-decoration-none d-flex justify-content-between align-items-center"
						>
							<i className="bi bi-people fs-6 d-flex d-sm-none"></i>
							<span className="d-none d-sm-flex">Nosotros</span>
						</Link>

						{user?.isAdmin ? (
							<Link
								to="/admin"
								className="d-flex  align-items-start "
								title="Panel de control"
							>
								<i className="d-flex d-sm-none bi bi-gear px-2 position-relative"></i>
								<span className="d-none d-sm-flex text-white px-2 text-decoration-none ">
									Panel de control
								</span>
							</Link>
						) : (
							<></>
						)}

						<Dropdown>
							<Dropdown.Toggle
								as={CustomToggle}
								id="dropdown-custom-components"
							></Dropdown.Toggle>
							<Dropdown.Menu
								align={{ xxl: "start" }}
								className="bg-black text-white mt-3"
							>
								{user?.newToken ? (
									<div className="navegacion d-flex flex-column text-center">
										<Link className="p-1 w-100 " to="/settings/address" title="Ajustes">
											<p className="p-0 m-0 ">Ajustes</p>
										</Link>
										<Link className="p-1 w-100 " to="/history" title="Historial">
											<p className="p-0 m-0 ">Historial</p>
										</Link>
										<Dropdown.Divider />
										<Link
											className="p-0 w-100 fs-6 text-danger"
											to="/"
											title="Cerrar sesión"
											/*cerrar sesion*/
											onClick={() => dispatch(actions.deleteUser)}
										>
											<span className="fs-6">Cerrar Sesión</span>
										</Link>
									</div>
								) : (
									<div className="navegacion d-flex flex-column">
										<Link className="p-1 w-100 text-center" to="/login" title="Ingresar">
											<p className="p-0 m-0 ">Ingresar</p>
										</Link>
										<Dropdown.Divider />
										<Link
											className="p-1 w-100 text-center"
											to="/register"
											title="Registrarse"
										>
											<p className="p-0 m-0 ">Registrarse</p>
										</Link>
									</div>
								)}
							</Dropdown.Menu>
						</Dropdown>

						<Link
							to="/cart"
							className=" ms-3 d-flex align-items-start"
							title="Carrito de compras"
						>
							<div className="ms-auto position-relative">
								<i className="bi bi-cart3  position-relative"></i>
								<span className=" badge rounded-pill bg-danger py-1 px-1 position-absolute top-0 end-50">
									{totalItemsCart}
								</span>
							</div>
						</Link>
					</div>
				</Container>
			</Navbar>
		</>
	);
}

export default NavigationBar;

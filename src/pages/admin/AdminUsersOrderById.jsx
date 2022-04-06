import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import Sidebar from "../../components/Sidebar";

function AdminUsersOrderById() {
	const newToken = useSelector((state) => state.user.newToken);
	const navigate = useNavigate;
	let { id } = useParams();

	const [order, setOrder] = useState([]);

	useEffect(() => {
		const getOrder = async () => {
			const { data } = await axios({
				method: "get",
				url: `${process.env.REACT_APP_API_URL}admin/orders/1`,
				headers: { Authorization: `Bearer ${newToken}` },
			});
			console.log(data);
			setOrder(data);
		};
		getOrder();
	}, []);

	// Crear ruta edición órden
	const handleEditOrder = async () => {
		await axios({
			method: "patch",
			url: `${process.env.REACT_APP_API_URL}admin/orders/${id}`,
			data: order,
			headers: { Authorization: `Bearer ${newToken}` },
		});
		navigate("/admin/orders");
	};

	return (
		<div className="d-flex">
			<Sidebar />
			<div className="w-100">
				<div className="container px-4 mx-auto py-5">
					<h3>Órden #{order.id}</h3>
					<div className="mt-4">
						<div className="border border-dark d-flex flex-column flex-wrap bg-light w-50 m-auto">
							<div className="d-flex flex-column border border-secondary text-start">
								<h3>Lista de Productos</h3>
								<p>{order.productList}</p>
							</div>
							<div className="d-flex flex-column border border-secondary text-start">
								<h3>Dirección</h3>
								<p>{order.address}</p>
							</div>
							<div className="d-flex justify-content-between flex-wrap border border-secondary text-start">
								<div className="d-flex flex-column">
									<h3>Estado</h3>
									<p>{order.status}</p>
								</div>
								<div className="d-flex flex-column">
									<h6>Editar estado:</h6>
									<form
										onSubmit={(e) => {
											e.preventDefault();
											handleEditOrder();
										}}
									>
										<select name="status-option" id="status-option">
											<option value="Procesando">Procesando</option>
											<option value="Enviado">Enviado</option>
										</select>
										<br />
										<button
											type="submit"
											className="btn btn-dark"
											onClick={() =>
												setOrder({
													...order,
													status: document.querySelector("#status-option").value,
												})
											}
										>
											Guardar
										</button>
									</form>
								</div>
							</div>
							<div className="d-flex flex-column border border-secondary text-start">
								<h3>Precio Total</h3>
								<p>{order.totalPrice}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AdminUsersOrderById;

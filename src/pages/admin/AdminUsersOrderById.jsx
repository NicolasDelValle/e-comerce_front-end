import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./css/adminUsersOrderById.css";

import Sidebar from "../../components/Sidebar";
import { BsCheck2 } from "react-icons/bs";

function AdminUsersOrderById() {
	const newToken = useSelector((state) => state.user.newToken);
	const navigate = useNavigate;

	const [order, setOrder] = useState(null);

	const { id } = useParams();

	useEffect(() => {
		const getOrder = async () => {
			const { data } = await axios({
				method: "get",
				url: `${process.env.REACT_APP_API_URL}admin/orders/${id}`,
				headers: { Authorization: `Bearer ${newToken}` },
			});
			setOrder(data);
			console.log(data);
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
		<>
			{order && (
				<div className="d-flex">
					<Sidebar />
					<div className="w-100">
						<div className="container px-4 mx-auto py-5" id="order-div">
							<h3>Órden #{order.id}</h3>
							<div
								className="container px-4 mx-auto py-4 table-responsive"
								id="order-div"
							>
								<table className="table">
									<thead className="table-light">
										<tr className="text-start">
											<th scope="col">Concepto</th>
											<th scope="col">Detalles</th>
										</tr>
									</thead>
									<tbody className="text-start">
										<tr>
											<td>Lista de Productos</td>
											<td>
												{order.productList.map((product) => (
													<p key={product.name} className="m-0">
														{product.name}
													</p>
												))}
											</td>
										</tr>
										<tr>
											<td>Dirección</td>
											<td>{order.address}</td>
										</tr>
										<tr>
											<td>Usuario</td>
											<td>{order.userName}</td>
										</tr>
										<tr>
											<td>Estado</td>
											<td className="d-flex flex-wrap justify-content-between align-items-center">
												{order.status}{" "}
												<div className="d-flex justify-content-center align-items-center">
													<p className="my-0">Editar estado:</p>
													<form
														className="d-flex justify-content-center align-items-center"
														id="edit-order"
														onSubmit={(e) => {
															e.preventDefault();
															handleEditOrder();
														}}
													>
														<select className="me-1" name="status-option" id="status-option">
															<option value="Procesando">Procesando</option>
															<option value="Enviado">Enviado</option>
															<option value="Recibido">Recibido</option>
														</select>
														<button
															type="submit"
															className="p-0 border-0 rounded-circle btn-dark"
															onClick={() =>
																setOrder({
																	...order,
																	status: document.querySelector("#status-option").value,
																})
															}
														>
															<BsCheck2 size={20} />
														</button>
													</form>
												</div>
											</td>
										</tr>
										<tr>
											<td>Precio Total</td>
											<td>{order.totalPrice}</td>
										</tr>
									</tbody>
								</table>
							</div>
							<Link to={`../admin/orders`}>
								<button className="btn btn-dark rounded-pill">Volver</button>
							</Link>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default AdminUsersOrderById;

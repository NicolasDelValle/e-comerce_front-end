import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";

import Sidebar from "../../components/Sidebar";

function AdminUsersOrders() {
	const newToken = useSelector((state) => state.user.newToken);

	const [orders, setOrders] = useState([]);

	useEffect(() => {
		const getOrders = async () => {
			const { data } = await axios({
				method: "get",
				url: `${process.env.REACT_APP_API_URL}admin/orders`,
				headers: { Authorization: `Bearer ${newToken}` },
			});
			console.log("Orders" + data);
			setOrders(data);
		};
		getOrders();
	}, []);

	return (
		<div className="d-flex">
			<Sidebar />
			<div className="w-100">
				<div className="container px-4 mx-auto py-5">
					<h3>Lista de órdenes</h3>
					<div className="row mt-4">
						<div className="table-responsive">
							<table className="table">
								<thead className="table-light">
									<tr>
										<th scope="col">ID</th>
										<th scope="col">Estado</th>
										<th scope="col">Dirección</th>
										<th scope="col">Precio Total</th>
										<th scope="col">Administrar</th>
									</tr>
								</thead>
								<tbody>
									{orders.length > 0 &&
										orders.map((order) => (
											<tr key={order.id}>
												<td>{order.id}</td>
												<td>{order.status}</td>
												<td>{order.address}</td>
												<td>{order.totalPrice}</td>
												<td>
													<Link to={`/admin/orders/${order.id}`}>
														<button className="mx-1 btn btn-outliner-secondary">
															<i className="bi bi-pencil"></i>
														</button>
													</Link>
												</td>
											</tr>
										))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AdminUsersOrders;

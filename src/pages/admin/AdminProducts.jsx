import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

import "./admin.css";
import BackNavbar from "../../components/BackNavbar";

function AdminProducts() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const getProducts = async () => {
			const { data } = await axios({
				method: "get",
				url: `${process.env.REACT_APP_API_URL}products`,
			});
			console.log(data);
			setProducts(data);
		};
		getProducts();
	}, []);

	return (
		<>
			<div className="admin-main-content">
				<div className="admin-main-content-options">
					<button className="btn btn-primary">Nuevo Producto</button>
				</div>
				<div className="admin-main-content-data">
					<table className="table">
						<thead>
							<tr>
								<th scope="col">Nombre</th>
								<th scope="col">Precio</th>
								<th scope="col">Stock</th>
							</tr>
						</thead>
						<tbody>
							{products.length > 0 &&
								products.map((item) => (
									<tr key={item.id}>
										<td>{item.name}</td>
										<td>{item.price}</td>
										<td>{item.stock}</td>
									</tr>
								))}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
}

export default AdminProducts;

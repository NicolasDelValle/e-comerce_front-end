import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

import "./admin.css";

function AdminUsers() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const getUsers = async () => {
			const { data } = await axios({
				method: "get",
				url: `${process.env.REACT_APP_API_URL}users`,
			});
			console.log(data);
			setUsers(data);
		};
		getUsers();
	}, []);

	return (
		<>
			<div className="admin-main-content">
				<h2>Lista de Usuarios</h2>
				<div className="admin-main-content-data">
					<table className="table">
						<thead>
							<tr>
								<th scope="col">Nombre</th>
								<th scope="col">Apellido</th>
								<th scope="col">Email</th>
							</tr>
						</thead>
						<tbody>
							{users.length > 0 &&
								users.map((user) => (
									<tr key={user.id}>
										<td>{user.firstname}</td>
										<td>{user.lastname}</td>
										<td>{user.email}</td>
									</tr>
								))}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
}

export default AdminUsers;

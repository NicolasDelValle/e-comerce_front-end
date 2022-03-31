import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import ModalNewProduct from "./ModalNewProduct";
import AdminProductsItem from "./AdminProductsItem";
import Sidebar from "../../components/Sidebar";

function AdminProducts() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [products, setProducts] = useState([]);
	const token = useSelector((state) => state.user.token);

	useEffect(() => {
		const getProducts = async () => {
			const { data } = await axios({
				method: "get",
				url: `${process.env.REACT_APP_API_URL}products`,
				headers: { Authorization: `Bearer ${token}` },
			});
			console.log(data);
			setProducts(data);
		};
		getProducts();
	}, []);

	return (
		<Sidebar />
		// 			<div className="container-fluid px-4">
		// 				<Modal show={show} onHide={handleClose}>
		// 					<Modal.Header closeButton>
		// 						<Modal.Title>Nuevo Producto</Modal.Title>
		// 					</Modal.Header>
		// 					<Modal.Body>
		// 						<form id="product-form" className="product-form">
		// 							<label htmlFor="product-name">Nombre</label>
		// 							<input type="text" name="name" id="product-name" />
		// 							<label for="product-category">Categoría</label>
		// 							<select id="product-category" name="category-list" form="product-form">
		// 								<option value="Seleccionar" selected disabled>
		// 									Seleccionar
		// 								</option>
		// 								<option value="1">Tablas</option>
		// 								<option value="2">Hardware</option>
		// 								<option value="3">Ruedas</option>
		// 								<option value="4">Ropa</option>
		// 							</select>
		// 							<label htmlFor="product-description">Descripción</label>
		// 							<textarea
		// 								type="text"
		// 								name="description"
		// 								id="product-description"
		// 								size="50"
		// 							/>
		// 							<label htmlFor="product-details">Detalles</label>
		// 							<textarea type="text" name="details" id="product-details" size="50" />
		// 							<label htmlFor="product-image">Imagen</label>
		// 							<input
		// 								type="text"
		// 								placeholder="http://via.placeholder.com/640x360"
		// 								name="imageUrl"
		// 							/>
		// 							<label htmlFor="product-price">Precio</label>
		// 							<input type="number" name="price" id="product-price" />
		// 							<label htmlFor="product-stock">Stock</label>
		// 							<input type="number" name="stock" id="product-stock" />
		// 							<label for="product-featured">Destacado</label>
		// 							<select
		// 								id="product-featured"
		// 								name="featured-options"
		// 								form="product-form"
		// 							>
		// 								<option value="Seleccionar" selected disabled>
		// 									Seleccionar
		// 								</option>
		// 								<option value="true">Sí</option>
		// 								<option value="false">No</option>
		// 							</select>
		// 							<label htmlFor="product-slug">Slug</label>
		// 							<input type="text" id="product-slug" name="slug" />
		// 							<button type="submit" className="btn btn-success" onClick={handleClose}>
		// 								Aceptar
		// 							</button>
		// 						</form>
		// 					</Modal.Body>
		// 					<Modal.Footer>
		// 						<Button variant="danger" onClick={handleClose}>
		// 							Cancelar
		// 						</Button>
		// 					</Modal.Footer>
		// 				</Modal>
		// 				<div className="row mt-4">
		// 					<div className="table-responsive">
		// 						<table className="table">
		// 							<thead className="table-light">
		// 								<tr>
		// 									<th scope="col" onClick={() => setProducts()}>
		// 										Nombre
		// 									</th>
		// 									<th scope="col">Precio</th>
		// 									<th scope="col">Destacado</th>
		// 									<th scope="col">Stock</th>
		// 									<th scope="col">Administrar</th>
		// 								</tr>
		// 							</thead>
		// 							<tbody>
		// 								{products.length > 0 &&
		// 									products.map((item) => (
		// 										<tr key={item.id}>
		// 											<td>{item.name}</td>
		// 											<td>{item.price}</td>
		// 											<td>{item.featured ? "Sí" : "No"}</td>
		// 											<td>{item.stock}</td>
		// 											<td>
		// 												<Button>
		// 													<i className="bi bi-gear"></i>
		// 												</Button>
		// 												<Button>Editar</Button>
		// 												<Button variant="danger">Eliminar</Button>
		// 											</td>
		// 										</tr>
		// 									))}
		// 							</tbody>
		// 						</table>
		// 					</div>
	);
}

export default AdminProducts;

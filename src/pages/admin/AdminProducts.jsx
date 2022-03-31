import { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

import "./admin.css";
import "./adminProduct.css";
import BackNavbar from "../../components/BackNavbar";
import { useSelector } from "react-redux";

function AdminProducts() {
  const [showSidebar, setShowSidebar] = useState(true);

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
            <h1 className="h3">Administración</h1>
          </>
        }
      />
      <div className="admin-main">
        <div
          className={
            showSidebar
              ? "admin-main-sidebar bg-dark"
              : "admin-main-sidebar-hidden"
          }
        >
          <div className="admin-main-sidebar-option">
            <h3 className="text-secondary">INICIO</h3>
            <Link to="/admin">Menú Principal</Link>
          </div>
          <div className="admin-main-sidebar-option">
            <h3 className="text-secondary">PRODUCTOS</h3>
            <Link to="/admin/products">Lista de Productos</Link>
            <p onClick={handleShow}>Nuevo Producto</p>
          </div>
          <div className="admin-main-sidebar-option">
            <h3 className="text-secondary">ÓRDENES</h3>
            <Link to="/admin/users">Lista de Órdenes</Link>
          </div>
          <div className="admin-main-sidebar-option">
            <h3 className="text-secondary">USUARIOS</h3>
            <Link to="/admin/users">Lista de Usuarios</Link>
          </div>
          <div className="admin-main-sidebar-user d-flex align-items-center justify-content-between">
            <div className="d-flex flex-column align-items-center justify-content-between">
              <p>Administrador:</p>
              <p>Pepe González</p>
            </div>
            <button className="btn btn-danger p-1">
              <i className="bi bi-box-arrow-left h5"></i>
            </button>
          </div>
        </div>
        <div className="container-fluid px-4">
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Nuevo Producto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form id="product-form" className="product-form">
                <label htmlFor="product-name">Nombre</label>
                <input type="text" name="name" id="product-name" />
                <label for="product-category">Categoría</label>
                <select
                  id="product-category"
                  name="category-list"
                  form="product-form"
                >
                  <option value="Seleccionar" selected disabled>
                    Seleccionar
                  </option>
                  <option value="1">Tablas</option>
                  <option value="2">Hardware</option>
                  <option value="3">Ruedas</option>
                  <option value="4">Ropa</option>
                </select>
                <label htmlFor="product-description">Descripción</label>
                <textarea
                  type="text"
                  name="description"
                  id="product-description"
                  size="50"
                />
                <label htmlFor="product-details">Detalles</label>
                <textarea
                  type="text"
                  name="details"
                  id="product-details"
                  size="50"
                />
                <label htmlFor="product-image">Imagen</label>
                <input
                  type="text"
                  placeholder="http://via.placeholder.com/640x360"
                  name="imageUrl"
                />
                <label htmlFor="product-price">Precio</label>
                <input type="number" name="price" id="product-price" />
                <label htmlFor="product-stock">Stock</label>
                <input type="number" name="stock" id="product-stock" />
                <label for="product-featured">Destacado</label>
                <select
                  id="product-featured"
                  name="featured-options"
                  form="product-form"
                >
                  <option value="Seleccionar" selected disabled>
                    Seleccionar
                  </option>
                  <option value="true">Sí</option>
                  <option value="false">No</option>
                </select>
                <label htmlFor="product-slug">Slug</label>
                <input type="text" id="product-slug" name="slug" />
                <button
                  type="submit"
                  className="btn btn-success"
                  onClick={handleClose}
                >
                  Aceptar
                </button>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose}>
                Cancelar
              </Button>
            </Modal.Footer>
          </Modal>
          <div className="row mt-4">
            <div className="table-responsive">
              <table className="table">
                <thead className="table-light">
                  <tr>
                    <th scope="col" onClick={() => setProducts()}>
                      Nombre
                    </th>
                    <th scope="col">Precio</th>
                    <th scope="col">Destacado</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Administrar</th>
                  </tr>
                </thead>
                <tbody>
                  {products.length > 0 &&
                    products.map((item) => (
                      <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.featured ? "Sí" : "No"}</td>
                        <td>{item.stock}</td>
                        <td>
                          <Button>
                            <i className="bi bi-gear"></i>
                          </Button>
                          <Button>Editar</Button>
                          <Button variant="danger">Eliminar</Button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            {/* <div class="col-xl-3 col-md-6"></div>
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
            <h1 className="h3">Administración</h1>
          </>
        }
      />
      <div className="admin-main">
        <div
          className={
            showSidebar
              ? "admin-main-sidebar bg-dark"
              : "admin-main-sidebar-hidden"
          }
        >
          <div className="admin-main-sidebar-option">
            <h3 className="text-secondary">INICIO</h3>
            <Link to="/admin">Menú Principal</Link>
          </div>
          <div className="admin-main-sidebar-option">
            <h3 className="text-secondary">PRODUCTOS</h3>
            <Link to="/admin/products">Lista de Productos</Link>
            <p>Nuevo Producto</p>
          </div>
          <div className="admin-main-sidebar-option">
            <h3 className="text-secondary">ÓRDENES</h3>
            <Link to="/admin/users">Lista de Órdenes</Link>
          </div>
          <div className="admin-main-sidebar-option">
            <h3 className="text-secondary">USUARIOS</h3>
            <Link to="/admin/users">Lista de Usuarios</Link>
          </div>
          <div className="admin-main-sidebar-user d-flex align-items-center justify-content-between">
            <div className="d-flex flex-column align-items-center justify-content-between">
              <p>Administrador:</p>
              <p>Pepe González</p>
            </div>
            <button className="btn btn-danger p-1">
              <i className="bi bi-box-arrow-left h5"></i>
            </button>
          </div>
        </div>
        <div className="container-fluid px-4">
          <div className="row mt-4">
            <div className="col-xl-3 col-md-6">
              <Button variant="primary" onClick={handleShow}>
                Nuevo Producto
              </Button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Nuevo Producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <form id="product-form" className="product-form">
                    <label htmlFor="product-name">Nombre</label>
                    <input type="text" name="product-name" id="product-name" />
                    <label for="product-category">Categoría</label>
                    <select
                      id="product-category"
                      name="category-list"
                      form="product-form"
                    >
                      <option value="Seleccionar" selected disabled>
                        Seleccionar
                      </option>
                      <option value="Tablas">Tablas</option>
                      <option value="Ruedas">Ruedas</option>
                      <option value="Hardware">Hardware</option>
                      <option value="Ropa">Ropa</option>
                    </select>
                    <label htmlFor="product-description">Descripción</label>
                    <textarea
                      type="text"
                      name="product-description"
                      id="product-description"
                      size="50"
                    />
                    <label htmlFor="product-details">Detalles</label>
                    <textarea
                      type="text"
                      name="product-details"
                      id="product-details"
                      size="50"
                      placeholder="Escriba descripcion del producto"
                    />
                    <label htmlFor="product-image">Imagen</label>
                    <input
                      type="text"
                      placeholder="http://via.placeholder.com/640x360"
                    />
                    <label htmlFor="product-price">Precio</label>
                    <input
                      type="number"
                      name="product-price"
                      id="product-price"
                      placeholder="Ingrese precio"
                    />
                    <label htmlFor="product-stock">Stock</label>
                    <input
                      type="number"
                      name="product-stock"
                      id="product-stock"
                      placeholder="Ingrese stock"
                    />
                    <label for="product-featured">Destacado</label>
                    <select
                      id="product-featured"
                      name="featured-options"
                      form="product-form"
                    >
                      <option value="Seleccionar" selected disabled>
                        Seleccionar
                      </option>
                      <option value="true">Sí</option>
                      <option value="false">No</option>
                    </select>
                    <label htmlFor="product-slug">Slug</label>
                    <input
                      type="text"
                      name="product-slug"
                      id="product-slug"
                      placeholder="Slag del producto"
                    />
                    <button
                      type="submit"
                      className="btn btn-success mt-2"
                      onClick={handleClose}
                    >
                      Aceptar
                    </button>
                  </form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="danger" onClick={handleClose}>
                    Cancelar
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
          <div className="row mt-4">
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead className="table-light">
                  <tr>
                    <th scope="col" onClick={() => setProducts()}>
                      Nombre
                    </th>
                    <th scope="col">Precio</th>
                    <th scope="col">Destacado</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Administrar</th>
                  </tr>
                </thead>
                <tbody>
                  {products.length > 0 &&
                    products.map((item) => (
                      <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.featured ? "Sí" : "No"}</td>
                        <td>{item.stock}</td>
                        <td>
                          <Button>
                            <i className="bi bi-gear"></i>
                          </Button>
                          <Button>Editar</Button>
                          <Button variant="danger">Eliminar</Button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            {/* <div class="col-xl-3 col-md-6"></div>
						<div class="col-xl-3 col-md-6"></div>
						<div class="col-xl-3 col-md-6"></div>
						<div class="col-xl-3 col-md-6"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminProducts;

import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

import "./admin.css";
import "./adminProduct.css";
import BackNavbar from "../../components/BackNavbar";
import { useSelector } from "react-redux";
import ModalNewProduct from "./ModalNewProduct";
import AdminProductsItem from "./AdminProductsItem";

function AdminProducts() {
  const [showSidebar, setShowSidebar] = useState(true);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [products, setProducts] = useState([]);
  const token = useSelector((state) => state.user.newToken);

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
          <ModalNewProduct show={show} handleClose={handleClose} />
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
                      <AdminProductsItem key={item.slug} item={item} />
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

export default AdminProducts;

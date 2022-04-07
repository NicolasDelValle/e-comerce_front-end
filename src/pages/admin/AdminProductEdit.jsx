import { Link, useNavigate, useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Toast, ToastContainer } from "react-bootstrap";

function AdminProductEdit() {
  const { newToken } = useSelector((state) => state.user);
  const [editProduct, setEditProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate;
  let { slug } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      const { data } = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}products/${slug}`,
      });
      setEditProduct(data);
    };
    getProduct();
  }, []);

  const handleEditProduct = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    setLoading((prev) => !prev);
    await axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}admin/products/${slug}`,
      data: formData,
      headers: {
        Authorization: `Bearer ${newToken}`,
        "Content-Type": "multipart/form-data",
      },
    });
  };

  return (
    <div className="d-flex  ">
      <Sidebar />
      <div className="w-100  position-relative">
        <div className="container px-4 mx-auto pt-5 ">
          <h2>Editar un producto</h2>
          <form
            id="product-form"
            className="d-flex flex-column "
            onSubmit={(e) => handleEditProduct(e)}
          >
            <div className="row text-start">
              <div className="col- col-lg-4 py-2">
                <label className="pe-2" htmlFor="product-name">
                  Nombre
                </label>
                <input
                  value={editProduct.name}
                  type="text"
                  name="name"
                  id="product-name"
                  onChange={(e) => {
                    setEditProduct({
                      ...editProduct,
                      name: e.target.value,
                    });
                  }}
                  placeholder="Nombre del producto"
                  className="form-control"
                />
              </div>
              <div className="col-4 col-lg-4  py-2">
                <label className="pe-2" htmlFor="product-category">
                  Categoría
                </label>
                <select
                  defaultValue={editProduct.category}
                  id="product-category"
                  name="categoryId"
                  className="form-select"
                  onChange={(e) => {
                    setEditProduct({
                      ...editProduct,
                      categoryId: e.target.value,
                    });
                  }}
                >
                  <option value="1">Tablas</option>
                  <option value="2">Hardware</option>
                  <option value="3">Ruedas</option>
                  <option value="4">Ropa</option>
                </select>
              </div>
              <div className="col-4 col-lg-4 py-2">
                <label className="pe-2" htmlFor="product-featured">
                  Destacado
                </label>
                <select
                  defaultValue={editProduct.featured}
                  id="product-featured"
                  name="featured"
                  onChange={(e) => {
                    setEditProduct({
                      ...editProduct,
                      featured: e.target.value,
                    });
                  }}
                  className="form-control"
                >
                  <option disabled>Seleccionar</option>
                  <option value="true">Sí</option>
                  <option value="false">No</option>
                </select>
              </div>
              <div className="col-4 col-lg-4 py-2">
                <label className="pe-2" htmlFor="product-price">
                  Precio
                </label>
                <input
                  value={editProduct.price}
                  type="number"
                  name="price"
                  id="product-price"
                  onChange={(e) => {
                    setEditProduct({
                      ...editProduct,
                      price: e.target.value,
                    });
                  }}
                  placeholder="Precio del producto"
                  className="form-control"
                />
              </div>
              <div className="col- col-lg-4 py-2">
                <label className="pe-2" htmlFor="product-stock">
                  Stock
                </label>
                <input
                  value={editProduct.stock}
                  type="number"
                  name="stock"
                  id="product-stock"
                  onChange={(e) => {
                    setEditProduct({
                      ...editProduct,
                      stock: e.target.value,
                    });
                  }}
                  placeholder="Stock del producto"
                  className="form-control"
                />
              </div>
              <div className="col- py-2">
                <label className="form-label pe-2" htmlFor="product-image">
                  Imagen
                </label>
                <input
                  defaultValue={editProduct.imageUrl}
                  //value={editProduct.imageUrl}
                  type="file"
                  placeholder={editProduct.imageUrl}
                  name="imageUrl"
                  onChange={(e) => {
                    setEditProduct({
                      ...editProduct,
                      imageUrl: e.target.value,
                    });
                  }}
                  className="form-control"
                />
              </div>
              <div className="col- py-2">
                <label className="pe-2" htmlFor="product-description">
                  Descripción
                </label>
                <textarea
                  value={editProduct.description}
                  type="text"
                  name="description"
                  id="product-description"
                  size="50"
                  onChange={(e) => {
                    setEditProduct({
                      ...editProduct,
                      description: e.target.value,
                    });
                  }}
                  placeholder="Descripcion del producto"
                  className="form-control"
                />
              </div>
              <div className="col- py-2">
                <label className="pe-2" htmlFor="product-details">
                  Detalles
                </label>
                <textarea
                  value={editProduct.details}
                  type="text"
                  name="details"
                  id="product-details"
                  size="50"
                  onChange={(e) => {
                    setEditProduct({
                      ...editProduct,
                      details: e.target.value,
                    });
                  }}
                  placeholder="Detalles del producto"
                  className="form-control"
                />
              </div>
            </div>
            {loading ? (
              <ToastContainer
                className="p-3 position-absolute"
                position={"middle-center"}
              >
                <Toast>
                  <div className="text-end pe-2 pt-1">
                    <button className="btn"> X</button>
                  </div>
                  <Toast.Body className="p-5">
                    <h6>Todos los cambios han sido realizados con éxito.</h6>
                  </Toast.Body>
                  <Link
                    to={"/admin/products"}
                    className="btn boton d-block m-2"
                  >
                    Regresar
                  </Link>
                </Toast>
              </ToastContainer>
            ) : (
              <div>
                <button className="boton me-2 botonCrear" type="submit">
                  Aceptar
                </button>
                <button className="boton text-dark botonEliminar">
                  <Link to={"/admin/products"}>Cancelar</Link>
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminProductEdit;

import { Link, useNavigate, useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

function AdminProductEdit() {
  const { newToken } = useSelector((state) => state.user);
  const [editProduct, setEditProduct] = useState({});
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
    setEditProduct(formData);
    await axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}admin/products/${slug}`,
      data: formData,
      headers: {
        Authorization: `Bearer ${newToken}`,
        "Content-Type": "multipart/form-data",
      },
    });
    navigate("/admin/products");
  };
  console.log(editProduct);
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="w-100 ">
        <div className="container px-4 mx-auto pt-5 ">
          <form
            id="product-form"
            className="d-flex flex-column"
            onSubmit={(e) => handleEditProduct(e)}
          >
            <h2>Editar un producto</h2>
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
              <div className="col- col-lg-4 py-2">
                <label className="pe-2" htmlFor="product-slug">
                  Slug
                </label>
                <input
                  value={editProduct.slug}
                  type="text"
                  id="product-slug"
                  name="slug"
                  onChange={(e) => {
                    setEditProduct({
                      ...editProduct,
                      slug: e.target.value,
                    });
                  }}
                  placeholder="Slug del producto"
                  className="form-control"
                />
              </div>
              <div className="col- py-2">
                <label className="form-label pe-2" htmlFor="product-image">
                  Imagen
                </label>
                <input
                  value={editProduct.imageUrl}
                  type="file"
                  placeholder="http://via.placeholder.com/640x360"
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
            <div>
              <button className="btn btn-success" type="submit">
                Aceptar
              </button>
              <button className="btn btn-danger">
                <Link to={"/admin/products"}>Cancelar</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminProductEdit;

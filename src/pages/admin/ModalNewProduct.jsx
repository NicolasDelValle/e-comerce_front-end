import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

function ModalNewProduct({ show, handleClose }) {
  const { newToken } = useSelector((state) => state.user);

  const [newProduct, setNewProduct] = useState({});
  console.log(newProduct);

  const handleCreateNewProduct = async () => {
    const { data } = await axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}admin/products`,
      data: newProduct,
      headers: { Authorization: `Bearer ${newToken}` },
    });
    console.log(data);
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Nuevo Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            id="product-form"
            className="d-flex flex-column"
            onSubmit={(e) => {
              e.preventDefault();
              handleCreateNewProduct();
            }}
          >
            <div className="d-flex align-items-center justify-content-between py-2">
              <label className="pe-2" htmlFor="product-name">
                Nombre
              </label>
              <input
                value={newProduct.name}
                type="text"
                name="name"
                id="product-name"
                onChange={(e) => {
                  setNewProduct({
                    ...newProduct,
                    name: e.target.value,
                  });
                }}
                placeholder="Nombre del producto"
                className="form-control"
              />
            </div>

            <div className="d-flex align-items-center justify-content-between py-2">
              <label className="pe-2" htmlFor="product-category">
                Categoría
              </label>
              <select
                defaultValue={newProduct.category}
                id="product-category"
                name="categoryId"
                className="form-select"
                onChange={(e) => {
                  setNewProduct({
                    ...newProduct,
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
            <div className="d-flex align-items-center justify-content-between py-2">
              <label className="pe-2" htmlFor="product-description">
                Descripción
              </label>
              <textarea
                value={newProduct.description}
                type="text"
                name="description"
                id="product-description"
                size="50"
                onChange={(e) => {
                  setNewProduct({
                    ...newProduct,
                    description: e.target.value,
                  });
                }}
                placeholder="Descripcion del producto"
                className="form-control"
              />
            </div>

            <div className="d-flex align-items-center justify-content-between py-2">
              <label className="pe-2" htmlFor="product-details">
                Detalles
              </label>
              <textarea
                value={newProduct.details}
                type="text"
                name="details"
                id="product-details"
                size="50"
                onChange={(e) => {
                  setNewProduct({
                    ...newProduct,
                    details: e.target.value,
                  });
                }}
                placeholder="Detalles del producto"
                className="form-control"
              />
            </div>

            <div className="d-flex align-items-center justify-content-between py-2">
              <label className="pe-2" htmlFor="product-image">
                Imagen
              </label>
              <input
                value={newProduct.imageUrl}
                type="text"
                placeholder="http://via.placeholder.com/640x360"
                name="imageUrl"
                onChange={(e) => {
                  setNewProduct({
                    ...newProduct,
                    imageUrl: e.target.value,
                  });
                }}
                className="form-control"
              />
            </div>

            <div className="d-flex align-items-center justify-content-between py-2">
              <label className="pe-2" htmlFor="product-price">
                Precio
              </label>
              <input
                value={newProduct.price}
                type="number"
                name="price"
                id="product-price"
                onChange={(e) => {
                  setNewProduct({
                    ...newProduct,
                    price: e.target.value,
                  });
                }}
                placeholder="Precio del producto"
                className="form-control"
              />
            </div>
            <div className="d-flex align-items-center justify-content-between py-2">
              <label className="pe-2" htmlFor="product-stock">
                Stock
              </label>
              <input
                value={newProduct.stock}
                type="number"
                name="stock"
                id="product-stock"
                onChange={(e) => {
                  setNewProduct({
                    ...newProduct,
                    stock: e.target.value,
                  });
                }}
                placeholder="Stock del producto"
                className="form-control"
              />
            </div>
            <div className="d-flex align-items-center justify-content-between py-2">
              <label className="pe-2" htmlFor="product-featured">
                Destacado
              </label>
              <select
                defaultValue={newProduct.featured}
                id="product-featured"
                name="featured"
                onChange={(e) => {
                  setNewProduct({
                    ...newProduct,
                    featured: e.target.value,
                  });
                }}
                className="form-control"
                // placeholder="Elegir opcion"
              >
                <option disabled>Seleccionar</option>
                <option value="true">Sí</option>
                <option value="false">No</option>
              </select>
            </div>
            <div className="d-flex align-items-center justify-content-between py-2">
              <label className="pe-2" htmlFor="product-slug">
                Slug
              </label>
              <input
                value={newProduct.slug}
                type="text"
                id="product-slug"
                name="slug"
                onChange={(e) => {
                  setNewProduct({
                    ...newProduct,
                    slug: e.target.value,
                  });
                }}
                placeholder="Slug del producto"
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-success">
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
    </>
  );
}

export default ModalNewProduct;

import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";

function AdminProductCreateNew() {
  const { newToken } = useSelector((state) => state.user);
  const [newProduct, setNewProduct] = useState({});

  const navigate = useNavigate();

  const handleCreateNewProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setNewProduct(formData);
    await axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}admin/products`,
      data: formData,
      headers: {
        Authorization: `Bearer ${newToken}`,
        "Content-Type": "multipart/form-data",
      },
    });

    setNewProduct({
      name: "",
      categoryId: "",
      featured: "",
      price: "",
      stock: "",
      imageUrl: "",
      description: "",
      details: [],
    });
    navigate("/admin/products");
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="w-100">
        <div className="container px-4 mx-auto py-3 ">
          <Form
            id="product-form"
            className="d-flex flex-column"
            onSubmit={(e) => handleCreateNewProduct(e)}
          >
            <h2>Crear un producto</h2>
            <div className="row text-start">
              <Form.Group className="col- py-2">
                <Form.Label className="pe-2 form-label" htmlFor="product-name">
                  Nombre
                </Form.Label>
                <Form.Control
                  required
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
                  className="form-control p-1"
                />
              </Form.Group>
              <Form.Group className="col-4 col-lg-2  py-2">
                <Form.Label
                  className="pe-2 form-label"
                  htmlFor="product-category"
                >
                  Categor??a
                </Form.Label>
                <Form.Select
                  defaultValue={"Seleccionar"}
                  value={newProduct.category}
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
                  <option disabled>Seleccionar</option>
                  <option value="1">Tablas</option>
                  <option value="2">Hardware</option>
                  <option value="3">Ruedas</option>
                  <option value="4">Ropa</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="col-4 col-lg-2 py-2">
                <Form.Label
                  className="form-label pe-2"
                  htmlFor="product-featured"
                >
                  Destacado
                </Form.Label>
                <Form.Select
                  defaultValue={"Seleccionar"}
                  value={newProduct.featured}
                  id="product-featured"
                  name="featured"
                  onChange={(e) => {
                    setNewProduct({
                      ...newProduct,
                      featured: e.target.value,
                    });
                  }}
                  className="form-control"
                >
                  <option disabled>Seleccionar</option>
                  <option value="true">Si</option>
                  <option value="false">No</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="col-4 col-lg-2 py-2">
                <Form.Label className="form-label pe-2" htmlFor="product-price">
                  Precio
                </Form.Label>
                <Form.Control
                  required
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
                  placeholder="($) Precio "
                  className="form-control"
                />
              </Form.Group>

              <Form.Group className="col- col-lg-2 py-2">
                <Form.Label className="form-label pe-2" htmlFor="product-stock">
                  Stock
                </Form.Label>
                <Form.Control
                  required
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
                  placeholder="Stock"
                  className="form-control"
                />
              </Form.Group>
              <Form.Group className="col- col-lg-4 py-2">
                <Form.Label className="form-label pe-2" htmlFor="product-image">
                  Imagen
                </Form.Label>
                <Form.Control
                  required
                  value={newProduct.imageUrl}
                  type="file"
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
              </Form.Group>
              <Form.Group className="col- py-2">
                <Form.Label
                  className="form-label pe-2"
                  htmlFor="product-description"
                >
                  Descripci??n
                </Form.Label>
                <Form.Control
                  required
                  as="textarea"
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
              </Form.Group>
              <Form.Group className="col- py-2">
                <Form.Label
                  className="form-label pe-2"
                  htmlFor="product-details"
                >
                  Detalles
                </Form.Label>
                <Form.Control
                  required
                  value={newProduct.details}
                  type="text"
                  name="details"
                  id="product-details"
                  placeholder="Detalles del producto"
                  className="form-control"
                  onChange={(e) => {
                    setNewProduct({
                      ...newProduct,
                      details: e.target.value,
                    });
                  }}
                />
              </Form.Group>
            </div>
            <div>
              <button className="boton me-2 botonCrear" type="submit">
                Crear
              </button>
              <button className="boton text-dark botonEliminar">
                <Link to={"/admin/products"}>Cancelar</Link>
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default AdminProductCreateNew;

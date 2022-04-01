import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import BackNavbar from "../../components/BackNavbar";
import AdminProductsItem from "./AdminProductsItem";
import Sidebar from "../../components/Sidebar";

function AdminProducts() {
  const newToken = useSelector((state) => state.user.newToken);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}products`,
        headers: { Authorization: `Bearer ${newToken}` },
      });
      console.log(data);
      setProducts(data);
    };
    getProducts();
  }, []);

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="w-100">
        <BackNavbar />
        <div className="container px-4 mx-auto py-5">
          <h3>Lista de Productos</h3>
          <div className="row mt-4">
            <div className="table-responsive">
              <table className="table">
                <thead className="table-light">
                  <tr>
                    <th scope="col">Nombre</th>
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

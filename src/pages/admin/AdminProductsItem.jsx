import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function AdminProductsItem({ item }) {
  const newToken = useSelector((state) => state.user.newToken);
  const [borraritem, setBorraritem] = useState(true);

  const handleDelete = (slug) => {
    const getProducts = async () => {
      await axios({
        method: "delete",
        url: `${process.env.REACT_APP_API_URL}admin/products/${slug}`,
        headers: { Authorization: `Bearer ${newToken}` },
      });
    };
    setBorraritem((prev) => !prev);
    getProducts();
  };
  return (
    <>
      {borraritem && (
        <tr key={item.id} className={borraritem ? "align-middle" : "d-none"}>
          <td className="p-0 fw-bold text-start">{item.name}</td>
          <td className="p-0">{item.price}</td>
          <td className="p-0">{item.featured ? "Sí" : "No"}</td>
          <td className="p-0">{item.stock}</td>
          <td className=" mx-auto p-0">
            <Link to={`/admin/products/edit/${item.slug}`}>
              <button className="mx-1 btn btn-outliner-secondary">
                <i className="bi bi-pencil"></i>
              </button>
            </Link>
            <button
              className="mx-1  btn btn-outliner-secondary"
              variant="danger"
              onClick={() => handleDelete(item.slug)}
            >
              <i className="bi bi-trash3-fill"></i>
            </button>
          </td>
        </tr>
      )}
    </>
  );
}

export default AdminProductsItem;

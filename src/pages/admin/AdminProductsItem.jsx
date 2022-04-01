import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function AdminProductsItem({ item }) {
  const newToken = useSelector((state) => state.user.newToken);
  const [show, setShow] = useState(true);

  const handleDelete = (slug) => {
    const getProducts = async () => {
      await axios({
        method: "delete",
        url: `${process.env.REACT_APP_API_URL}admin/products/${slug}`,
        headers: { Authorization: `Bearer ${newToken}` },
      });
    };
    setShow((prev) => !prev);
    getProducts();
  };
  return (
    <>
      {show && (
        <tr key={item.id} className={show ? "" : "d-none"}>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td>{item.featured ? "Sí" : "No"}</td>
          <td>{item.stock}</td>
          <td className="mx-auto">
            <Link to={`/admin/products/edit/${item.slug}`}>
              <Button className="mx-1">
                <i className="bi bi-pencil"></i>
              </Button>
            </Link>
            <Button
              className="mx-1"
              variant="danger"
              onClick={() => handleDelete(item.slug)}
            >
              <i className="bi bi-trash3-fill"></i>
            </Button>
          </td>
        </tr>
      )}
    </>
  );
}

export default AdminProductsItem;

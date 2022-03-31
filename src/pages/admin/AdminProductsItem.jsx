import React from "react";
import { Button, Modal } from "react-bootstrap";

function AdminProductsItem({ item }) {
  return (
    <>
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>{item.featured ? "Sí" : "No"}</td>
        <td>{item.stock}</td>
        <td className="mx-auto">
          <Button className="mx-1">
            <i className="bi bi-gear"></i>
          </Button>
          <Button className="mx-1">
            <i className="bi bi-pencil"></i>
          </Button>
          <Button className="mx-1" variant="danger">
            <i className="bi bi-trash3-fill"></i>
          </Button>
        </td>
      </tr>
    </>
  );
}

export default AdminProductsItem;

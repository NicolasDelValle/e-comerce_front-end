import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

import "./admin.css";
import Sidebar from "../../components/Sidebar";
import { useSelector } from "react-redux";

function AdminUsers() {
  const newToken = useSelector((state) => state.user.newToken);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const { data } = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}admin/users`,
        headers: { Authorization: `Bearer ${newToken}` },
      });
      console.log(data);
      setUsers(data);
    };
    getUsers();
  }, []);

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="container-fluid px-4 w-75  mx-auto py-5 admin-main-content">
        <h2>Lista de Usuarios</h2>
        <div className="admin-main-content-data">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 &&
                users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.firstname}</td>
                    <td>{user.lastname}</td>
                    <td>{user.email}</td>
                    <td className="mx-auto">
                      <Button className="mx-1">
                        <i className="bi bi-pencil"></i>
                      </Button>
                      <Button className="mx-1" variant="danger">
                        <i className="bi bi-trash3-fill"></i>
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminUsers;

import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useSelector } from "react-redux";
import Sidebar from "../../components/Sidebar";
import BackNavbar from "../../components/BackNavbar";

function AdminUsers() {
  const { newToken } = useSelector((state) => state.user);
  const [users, setUsers] = useState([]);
  const [newProduct, setNewProduct] = useState({});

  useEffect(() => {
    const getUsers = async () => {
      const { data } = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}admin/users`,
        headers: { Authorization: `Bearer ${newToken}` },
      });

      setUsers(data);
    };
    getUsers();
  }, []);
  const handleEditUser = async (id) => {
    await axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}admin/users/${id}`,
      headers: { Authorization: `Bearer ${newToken}` },
    });
  };
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="w-100">
        <BackNavbar />
        <div className="container px-4 mx-auto py-5">
          <h2>Lista de Usuarios</h2>

          <table className="table">
            <thead>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Email</th>
                <th scope="col">Acceso adminsitrador</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 &&
                users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.firstname}</td>
                    <td>{user.lastname}</td>
                    <td>{user.email}</td>
                    <td>
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          handleEditUser(user.id);
                        }}
                      >
                        <label htmlFor="isAdmin">
                          <input
                            value={user.isAdmin}
                            type="checkbox"
                            name="isAdmin"
                            id="isAdmin"
                          />
                        </label>
                      </form>
                    </td>
                    <td className="mx-auto">
                      <button className="mx-1  btn btn-outliner-secondary">
                        <i className="bi bi-trash3-fill"></i>
                      </button>
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

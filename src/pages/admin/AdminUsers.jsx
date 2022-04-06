import Sidebar from "../../components/Sidebar";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

function AdminUsers() {
  const { newToken } = useSelector((state) => state.user);
  const [users, setUsers] = useState({});
  const [checkbox, setCheckbox] = useState();

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
  }, [checkbox]);

  const handleEditUser = async (e, id, isAdmin) => {
    e.preventDefault(e);

    setCheckbox((prev) => !prev);

    const { data } = await axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}admin/users/${id}`,
      headers: { Authorization: `Bearer ${newToken}` },
    });
    console.log(data.isAdmin);
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="w-100">
        <div className="container px-4 mx-auto py-5">
          <h2>Lista de Usuarios</h2>

          <table className="table">
            <thead>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Email</th>
                <th scope="col">Acceso Administrador</th>
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
                        onClick={(e) => {
                          handleEditUser(e, user.id, user.isAdmin);
                        }}
                      >
                        <label htmlFor={user.id}>
                          <input
                            onChange={console.log(checkbox)}
                            onClick={() => {
                              console.log(user.isAdmin);
                            }}
                            defaultChecked={user.isAdmin}
                            value={checkbox}
                            type="checkbox"
                            name="isAdmin"
                            id={user.id}
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

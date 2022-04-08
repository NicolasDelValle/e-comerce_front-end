import { useEffect, useState } from "react";
import { Card, ListGroup, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import "./css/Admin.css";
import axios from "axios";
import { useSelector } from "react-redux";

function Admin() {
  const newToken = useSelector((state) => state.user.newToken);

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      const { data } = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}admin/orders`,
        headers: { Authorization: `Bearer ${newToken}` },
      });

      setOrders(data);
    };
    getOrders();
  }, [newToken]);

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="w-100 ">
        <div className="container px-4 pt-5">
          <div className="row mt-4">
            <div className="col-lg-6 col-">
              <Card bg="light" className="mb-4">
                <Card.Header className="">Información</Card.Header>
                <Card.Body className="text-start">
                  <Card.Text>
                    El reporte de ventas del primer trimestre de 2022 está
                    disponible.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <button className="boton">Ver</button>
                </Card.Footer>
              </Card>
            </div>
            <div className="col-lg-6 col- ">
              <Card bg="light" className="mb-4">
                <Card.Header className="">Más vendidos: Marzo</Card.Header>
                <Card.Body>
                  <ListGroup className="text-start">
                    <ListGroup.Item>
                      Tabla Girl Anderson 8.25''
                      <ProgressBar now={88} label={88} className="mt-2" />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Tabla Santa Cruz Johnson Beach
                      <ProgressBar now={71} label={71} className="mt-2" />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Ruedas Kimbel Kegger Barrel Elite
                      <ProgressBar now={62} label={62} className="mt-2" />
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
                <Card.Footer>
                  <button className="boton">Ver Listado</button>
                </Card.Footer>
              </Card>
            </div>

            <div className="col-lg-6 col-">
              <Card className="mb-4">
                <Card.Header className="">Tareas</Card.Header>
                <Card.Body>
                  <ListGroup className="text-start">
                    <ListGroup.Item>
                      Contactar proveedor Santa Cruz
                    </ListGroup.Item>
                    <ListGroup.Item>Ajustar precios Ciberlunes</ListGroup.Item>
                    <ListGroup.Item>
                      Enviar mail Promociones Otoño 22'
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between">
                  <button className="boton">Agregar</button>
                  <button className="boton">Eliminar</button>
                </Card.Footer>
              </Card>
            </div>
            <div className="col-lg-6 ">
              <Card className="mb-4">
                <Card.Header className=" text-black">Stock Mínimo</Card.Header>
                <Card.Body>
                  <ListGroup className="text-start">
                    <ListGroup.Item>
                      Ruedas Slime Balls Brains Speed Balls
                      <ProgressBar
                        now={23}
                        label={23}
                        variant="warning"
                        className="mt-2"
                      />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Ruedas Spitfire Formula Four Classic
                      <ProgressBar
                        now={18}
                        label={18}
                        variant="warning"
                        className="mt-2"
                      />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Tabla Santa Cruz Johnson Beach
                      <ProgressBar
                        now={9}
                        label={9}
                        variant="danger"
                        className="mt-2"
                      />
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between"></Card.Footer>
              </Card>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-6">
              <div className="card mb-4">
                <div className="card-header">
                  <i className="fas fa-table me-1"></i>
                  Últimas Órdenes
                </div>
                <div className="table-responsive">
                  <table className="table">
                    <thead className="table-light ">
                      <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Dirección</th>
                        <th scope="col">Precio Total</th>
                        <th scope="col">Administrar</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.length > 0 &&
                        orders.map((order) => (
                          <tr key={order.id} className="text-middle">
                            <td className="px-0 pb-0 ">{order.id}</td>
                            <td className="px-0 pb-0 ">{order.status}</td>
                            <td className="px-0 pb-0 ">{order.address}</td>
                            <td className="px-0 pb-0 ">{order.totalPrice}</td>
                            <td className="px-0 pb-0 ">
                              <Link to={`/admin/orders/${order.id}`}>
                                <button className=" btn btn-outliner-secondary p-0">
                                  <i className="bi bi-pencil"></i>
                                </button>
                              </Link>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;

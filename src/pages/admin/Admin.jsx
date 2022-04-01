import { Button } from "react-bootstrap";
import { Badge, Card, ListGroup, ProgressBar } from "react-bootstrap";

import BackNavbar from "../../components/BackNavbar";
import Sidebar from "../../components/Sidebar";

function Admin() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="w-100 ">
        <BackNavbar className="py-4" />
        <div className="container px-4 pt-5">
          <div className="row mt-4">
            <div className="col-xl-3 col-md-6">
              <Card bg="light" className="mb-4">
                <Card.Header className="h3">Información</Card.Header>
                <Card.Body className="text-start">
                  <Card.Title>
                    <Badge bg="info">Nuevo</Badge> Reporte de Ventas
                  </Card.Title>
                  <Card.Text>
                    El reporte de ventas del primer trimestre de 2022 está
                    disponible.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button variant="info" className="text-white fw-bold">
                    Ver Reporte
                  </Button>
                </Card.Footer>
              </Card>
            </div>
            <div className="col-xl-3 col-md-6">
              <Card bg="light" className="mb-4">
                <Card.Header className="h3">Más vendidos: Marzo</Card.Header>
                <Card.Body>
                  <ListGroup className="text-start">
                    <ListGroup.Item>Tabla Girl Anderson 8.25''</ListGroup.Item>
                    <ProgressBar now={88} label={88} />
                    <ListGroup.Item>
                      Tabla Santa Cruz Johnson Beach
                    </ListGroup.Item>
                    <ProgressBar now={71} label={71} />
                    <ListGroup.Item>
                      Ruedas Kimbel Kegger Barrel Elite
                    </ListGroup.Item>
                    <ProgressBar now={62} label={62} />
                  </ListGroup>
                </Card.Body>
                <Card.Footer>
                  <Button variant="info" className="text-white fw-bold">
                    Ver Listado Completo
                  </Button>
                </Card.Footer>
              </Card>
            </div>

            <div className="col-xl-3 col-md-6">
              <Card className="mb-4">
                <Card.Header bg="warning" className="h3">
                  Tareas
                </Card.Header>
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
                  <Button variant="success" className="text-white fw-bold">
                    Agregar Tarea
                  </Button>
                  <Button variant="danger" className="text-white fw-bold">
                    Eliminar Tarea
                  </Button>
                </Card.Footer>
              </Card>
            </div>
            <div className="col-xl-3 col-md-6">
              <Card className="mb-4">
                <Card.Header className="h3 text-white bg-danger">
                  Stock Mínimo
                </Card.Header>
                <Card.Body>
                  <ListGroup className="text-start">
                    <ListGroup.Item>
                      Ruedas Slime Balls Brains Speed Balls
                    </ListGroup.Item>
                    <ProgressBar now={23} label={23} variant="warning" />
                    <ListGroup.Item>
                      Ruedas Spitfire Formula Four Classic
                    </ListGroup.Item>
                    <ProgressBar now={18} label={18} variant="warning" />
                    <ListGroup.Item>
                      Tabla Santa Cruz Johnson Beach
                    </ListGroup.Item>
                    <ProgressBar now={9} label={9} variant="danger" />
                  </ListGroup>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between"></Card.Footer>
              </Card>
            </div>
          </div>

          <div className="row">
            <div className="card mb-4">
              <div className="card-header">
                <i className="fas fa-table me-1"></i>
                Últimas Órdenes
              </div>
              <div className="card-body"></div>
            </div>
            <div className="col-xl-6">
              <div className="card mb-4">
                <div className="card-header">
                  <i className="fas fa-chart-area me-1"></i>
                  Area Chart Example
                </div>
                <div className="card-body">
                  <canvas id="myAreaChart" width="100%" height="40"></canvas>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="card mb-4">
                <div className="card-header">
                  <i className="fas fa-chart-bar me-1"></i>
                  Bar Chart Example
                </div>
                <div className="card-body">
                  <canvas id="myBarChart" width="100%" height="40"></canvas>
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

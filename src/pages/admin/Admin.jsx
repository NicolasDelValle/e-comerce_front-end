import { Card, ListGroup, ProgressBar } from "react-bootstrap";
import Sidebar from "../../components/Sidebar";
import "./css/Admin.css";

function Admin() {
	return (
		<div className="d-flex">
			<Sidebar />
			<div className="w-100 ">
				<div className="container px-4 pt-5">
					<div className="row mt-4">
						<div className="col-md-3 col-md-">
							<Card bg="light" className="mb-4">
								<Card.Header className="">Información</Card.Header>
								<Card.Body className="text-start">
									<Card.Text>
										El reporte de ventas del primer trimestre de 2022 está disponible.
									</Card.Text>
								</Card.Body>
								<Card.Footer>
									<button className="boton">Ver</button>
								</Card.Footer>
							</Card>
						</div>
						<div className="col-md-3 ">
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

						<div className="col-md-3 ">
							<Card className="mb-4">
								<Card.Header className="">Tareas</Card.Header>
								<Card.Body>
									<ListGroup className="text-start">
										<ListGroup.Item>Contactar proveedor Santa Cruz</ListGroup.Item>
										<ListGroup.Item>Ajustar precios Ciberlunes</ListGroup.Item>
										<ListGroup.Item>Enviar mail Promociones Otoño 22'</ListGroup.Item>
									</ListGroup>
								</Card.Body>
								<Card.Footer className="d-flex justify-content-between">
									<button className="boton">Agregar</button>
									<button className="boton">Eliminar</button>
								</Card.Footer>
							</Card>
						</div>
						<div className="col-md-3 ">
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
											<ProgressBar now={9} label={9} variant="danger" className="mt-2" />
										</ListGroup.Item>
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

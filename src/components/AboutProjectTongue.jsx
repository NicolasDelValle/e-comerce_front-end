import "./css/AboutProjectTongue.css";
import { BsFillCaretRightFill } from "react-icons/bs";
import { Link } from "react-router-dom";

import Carlos from "../img/fotosDePerfil/CarlosGAF.jpg";
import Mauro from "../img/fotosDePerfil/MauroR.jpg";
import Luis from "../img/fotosDePerfil/LuisZ.png";
import Nico from "../img/fotosDePerfil/NicoDLV.jpg";

import { SiLinkedin, SiGithub } from "react-icons/si";
import { AiOutlineClose } from "react-icons/ai";

function AboutProjectTongue() {
	return (
		<>
			<div>
				<input
					type="checkbox"
					className="tongue-checkbox d-none"
					id="input-checkbox"
				/>
				<label className="tongue-label" htmlFor="input-checkbox">
					<BsFillCaretRightFill size={15} className="me-1 mb-1 tongue-label-caret" />
					<h6 className="m-0 tongue-label-title">Sobre el Proyecto</h6>
				</label>
				<div className="tongue-modal px-3 pt-4">
					<div className="d-flex justify-content-between align-items-center">
						<h6 className="tongue-modal-title m-0">Sobre el Proyecto</h6>
					</div>
					<div className="tongue-modal-text">
						<p>
							Este proyecto fue creado como trabajo final del Coding Bootcamp de Hack
							Academy, en la edición de Enero de 2022.
						</p>
						<p>
							La consigna de este trabajo final consistía en la creación de un
							e-commerce a elección libre, teniendo para su desarrollo un lapso de 3
							semanas.
						</p>
					</div>

					<div className="d-flex flex-column">
						<h6 className="m-0 tongue-modal-title mt-3 mb-3">Desarrolladores</h6>
						<div className="d-flex flex-wrap justify-content-around my-2">
							<div className="modal-avatar-div d-flex flex-column justify-content-center align-items-center">
								<div
									className="modal-avatar-img d-flex flex-column justify-content-center align-items-center"
									style={{ backgroundImage: `url(${Luis})` }}
								></div>
								<div className="modal-avatar-text mt-1">
									<h6>Luis Zunino</h6>
									<div className="d-flex justify-content-center align-items-center">
										<a href="https://www.linkedin.com/in/luis-zunino/">
											<SiLinkedin size={15} className="mx-1 modal-avatar-icon" />
										</a>
										<a href="https://github.com/luis-zunino">
											<SiGithub size={15} className="mx-1 modal-avatar-icon" />
										</a>
									</div>
								</div>
							</div>
							<div className="modal-avatar-div d-flex flex-column justify-content-center align-items-center">
								<div
									className="modal-avatar-img d-flex flex-column justify-content-center align-items-center"
									style={{ backgroundImage: `url(${Nico})` }}
								></div>
								<div className="modal-avatar-text mt-1">
									<h6>Nicolás del Valle</h6>
									<div className="d-flex justify-content-center align-items-center">
										<a href="https://www.linkedin.com/in/nico-del-valle-dev/">
											<SiLinkedin size={15} className="mx-1 modal-avatar-icon" />
										</a>
										<a href="https://github.com/NicolasDelValle">
											<SiGithub size={15} className="mx-1 modal-avatar-icon" />
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="d-flex flex-wrap justify-content-around my-2">
							<div className="modal-avatar-div d-flex flex-column justify-content-center align-items-center">
								<div
									className="modal-avatar-img d-flex flex-column justify-content-center align-items-center"
									style={{ backgroundImage: `url(${Carlos})` }}
								></div>
								<div className="modal-avatar-text mt-1">
									<h6>Carlos García A.</h6>
									<div className="d-flex justify-content-center align-items-center">
										<a href="https://www.linkedin.com/in/carlos-garcia-arocena-fernandez/">
											<SiLinkedin size={15} className="mx-1 modal-avatar-icon" />
										</a>
										<a href="https://github.com/charlygaf">
											<SiGithub size={15} className="mx-1 modal-avatar-icon" />
										</a>
									</div>
								</div>
							</div>
							<div className="modal-avatar-div d-flex flex-column justify-content-center align-items-center">
								<div
									className="modal-avatar-img d-flex flex-column justify-content-center align-items-center"
									style={{ backgroundImage: `url(${Mauro})` }}
								></div>
								<div className="modal-avatar-text mt-1">
									<h6>Mauro Raviolo</h6>
									<div className="d-flex justify-content-center align-items-center">
										<a href="https://www.linkedin.com/in/mauroraviolo/">
											<SiLinkedin size={15} className="mx-1 modal-avatar-icon" />
										</a>
										<a href="https://github.com/mauroraviolo23">
											<SiGithub size={15} className="mx-1 modal-avatar-icon" />
										</a>
									</div>
								</div>
							</div>
							<div>
								<div className="d-flex flex-column">
									<Link
										to="/aboutus"
										className="tongue-modal-link rounded-pill btn mt-5"
									>
										Ver más
									</Link>
									<span className="mt-2 mb-1">ó</span>
									<label htmlFor="input-checkbox">Cerrar</label>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default AboutProjectTongue;

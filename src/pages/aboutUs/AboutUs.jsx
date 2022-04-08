import React from "react";
import "./aboutUs.css";
import NavigationBar from "../../components/NavigationBar";

import { Carousel } from "react-bootstrap";

import Carlos from "../../img/fotosDePerfil/CarlosGAF.jpg";
import Mauro from "../../img/fotosDePerfil/MauroR.jpg";
import Luis from "../../img/fotosDePerfil/LuisZ.png";
import Nico from "../../img/fotosDePerfil/NicoDLV.jpg";

import {
	SiReact,
	SiRedux,
	SiCss3,
	SiSequelize,
	SiJsonwebtokens,
	SiBootstrap,
	SiNodedotjs,
	SiExpress,
	SiLinkedin,
	SiGithub,
} from "react-icons/si";
import Footer from "../../components/Footer";

function AboutUs() {
	return (
		<>
			<NavigationBar />
			{/* <div className="about-header">
				<h1 className="about-header-title">NOSOTROS</h1>
			</div> */}

			<div className="container">
				<div className="row mt-5 d-flex  justify-content-center">
					<h2>Equipo de Desarrollo</h2>
					<div className="col-sm-8 d-flex  justify-content-center my-5">
						<div className="d-flex row">
							<div className="about-profile-div col-12 col-sm-6 col-lg-3">
								<div
									className="about-profile-img"
									style={{ backgroundImage: `url(${Luis})` }}
								></div>
								<div className="about-profile-name">
									<h3 className="mt-3 mb-2">Luis Zunino</h3>
									<div className="d-flex">
										<a href="https://www.linkedin.com/in/luis-zunino/">
											<SiLinkedin size={25} className="mx-1" />
										</a>
										<a href="https://github.com/luis-zunino">
											<SiGithub size={25} className="mx-1" />
										</a>
									</div>
								</div>
							</div>
							<div className="about-profile-div col-12 col-sm-6 col-lg-3">
								<div
									className="about-profile-img"
									style={{ backgroundImage: `url(${Nico})` }}
								></div>
								<div className="about-profile-name">
									<h3 className="mt-3 mb-2">Nicolás Del Valle</h3>
									<div className="d-flex">
										<a href="https://www.linkedin.com/in/nico-del-valle-dev/">
											<SiLinkedin size={25} className="mx-1" />
										</a>
										<a href="https://github.com/NicolasDelValle">
											<SiGithub size={25} className="mx-1" />
										</a>
									</div>
								</div>
							</div>
							<div className="about-profile-div col-12 col-sm-6 col-lg-3">
								<div
									className="about-profile-img"
									style={{ backgroundImage: `url(${Carlos})` }}
								></div>
								<div className="about-profile-name">
									<h3 className="mt-3 mb-2">Carlos Garcia A.</h3>
									<div className="d-flex">
										<a href="https://www.linkedin.com/in/carlos-garcia-arocena-fernandez/">
											<SiLinkedin size={25} className="mx-1" />
										</a>
										<a href="https://github.com/charlygaf">
											<SiGithub size={25} className="mx-1" />
										</a>
									</div>
								</div>
							</div>
							<div className="about-profile-div col-12 col-sm-6 col-lg-3">
								<div
									className="about-profile-img"
									style={{ backgroundImage: `url(${Mauro})` }}
								></div>
								<div className="about-profile-name">
									<h3 className="mt-3 mb-2">Mauro Raviolo</h3>
									<div className="d-flex">
										<a href="https://www.linkedin.com/in/mauroraviolo/">
											<SiLinkedin size={25} className="mx-1" />
										</a>
										<a href="https://github.com/mauroraviolo23">
											<SiGithub size={25} className="mx-1" />
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-8 mx-auto mt-3 about-text">
						<p>
							La creación de este sitio web se dio en el marco del proyecto final del{" "}
							<a
								className="about-text-link"
								href="https://ha.dev/cursos/coding-bootcamp"
							>
								Coding Bootcamp de Hack Academy{" "}
							</a>
							en la edición comenzada en Enero de 2022. Se trata de un curso de
							dedicación full-time, con una duración de tres meses y clases de Lunes a
							Viernes de 9 a 18hs.
						</p>
						<p>
							El proyecto consiste en la creación de un sitio web de e-commerce, donde
							los estudiantes tenemos la posibilidad de utilizar todos los
							conocimientos obtenidos durante la cursada, aplicándolos en la creación
							de una web que cuente con las características y funcionalidades que se
							esperan encontrar en cualquiera de las que visitamos a diario para
							realizar compras o ver productos.
						</p>
						<p>
							El equipo de estudiantes debió organizarse para cumplir con los features
							estipulados con los que debe contar este trabajo para el que se cuenta
							con tres semanas para su desarrollo, por lo que la comunicación, el orden
							y el trabajo en equipo fueron factores fundamentales.
						</p>
						<p>
							Utilizamos{" "}
							<a className="about-text-link" href="http://trello.com">
								Trello
							</a>{" "}
							para organizarnos, dividirnos tareas y para llevar al día el proceso de
							desarrollo de nuestro sitio web. Nos reunimos a través de{" "}
							<a className="about-text-link" href="http://discord.com">
								Discord,
							</a>{" "}
							plataforma de gran utilidad ya que además de facilitar una comunicación
							rápida y fluida permite realizar presentaciones de pantalla, en las que
							cada integrante del equipo pudo mostrar las nuevas implementaciones antes
							de que fueran incorporadas al proyecto. Llevamos a cabo reuniones al
							empezar, durante y también al terminar cada jornada de trabajo, para
							reasignar tareas y apoyarnos en dudas que hayan surgido.
						</p>
						<p>Las tecnologías aplicadas fueron:</p>

						<div className="tecnology-applied-div">
							<div className="tecnology-applied">
								<SiReact size={45} />
								<p>React</p>
							</div>

							<div className="tecnology-applied">
								<SiRedux size={45} />
								<p>Redux</p>
							</div>
							<div className="tecnology-applied">
								<SiCss3 size={45} />
								<p>CSS</p>
							</div>
							<div className="tecnology-applied">
								<SiBootstrap size={45} />
								<p>Bootstrap</p>
							</div>
							<div className="tecnology-applied">
								<SiSequelize size={45} />
								<p>Sequelize</p>
							</div>
							<div className="tecnology-applied">
								<SiJsonwebtokens size={45} />
								<p>JWT</p>
							</div>
							<div className="tecnology-applied">
								<SiNodedotjs size={45} />
								<p>Node.js</p>
							</div>
							<div className="tecnology-applied">
								<SiExpress size={45} />
								<p>express</p>
							</div>
						</div>
						<div className="d-flex flex-wrap justify-content-between mt-3 mb-5 credentials-div">
							<p>
								Si deseas probar todas las funcionalidades del sitio, estas son las
								credenciales:
							</p>
							<div className="text-start">
								<span>Administrador</span>
								<p className="m-0">email: admin@mail.com</p>
								<p className="m-0">password: 1234</p>
							</div>
							<div className="text-start">
								<span>Usuario</span>
								<p className="m-0">email: user@mail.com</p>
								<p className="m-0">password: 1234</p>
							</div>
						</div>
					</div>
				</div>
				{/* <div id="metodologia" className="row">
					<div className="col-md-8 mb-5 mx-auto  about-text">

					</div>
				</div> */}
			</div>
			<Footer />
		</>
	);
}

export default AboutUs;

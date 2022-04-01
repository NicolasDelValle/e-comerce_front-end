import React from "react";
import "./aboutUs.css";
import NavigationBar from "../../components/NavigationBar";
import { Link } from "react-router-dom";

import LOSILogo from "../../img/logos/Logotipo.png";
import HACKLogo from "../../img/logos/hackAcademy.png";

import {
	SiReact,
	SiRedux,
	SiCss3,
	SiSequelize,
	SiJsonwebtokens,
	SiBootstrap,
	SiNodedotjs,
	SiExpress,
} from "react-icons/si";

function AboutUs() {
	return (
		<>
			<NavigationBar />
			<div className="about-header">
				<h1 className="about-header-title">Sobre el Proyecto</h1>
			</div>
			<div className="row p-3">
				<div className="col-12 col-md-8 m-auto about-text">
					<p>
						<div
							className="about-text-losi-logo"
							style={{ backgroundImage: `url(${LOSILogo})` }}
						></div>{" "}
						es un proyecto de Carlos Garcia Arocena y Thomas Hughes cuyo objetivo es
						aportarle a la escena cultural del skate uruguayo una marca que refleje
						los verdaderos valores del Skate.
					</p>
					<p>
						La creación de este sitio web nace a raíz de la participación de uno de
						sus fundadores, Carlos García Arocena, en el Coding Bootcamp de{" "}
						<a className="about-text-hack" href="http://ha.dev">
							Hack Academy{" "}
						</a>
						en la edición comenzada en Enero de 2022.
					</p>
					<p>
						El proyecto final del curso consiste en la creación de un sitio web de
						e-commerce, donde los estudiantes tenemos la posibilidad de utilizar todos
						los conocimientos obtenidos durante la cursada, aplicándolos en la
						creación de una web que cuente con las características y funcionalidades
						que se esperan encontrar en cualquiera de las que visitamos a diario para
						realizar compras o ver productos.
					</p>
					<p>
						El equipo de estudiantes debió organizarse para cumplir con los features
						estipulados con los que debe contar este trabajo para el que se cuenta con{" "}
						<b>tres semanas para su desarrollo,</b> por lo que la comunicación, el
						orden y el trabajo en equipo fueron factores fundamentales.
					</p>
					<p>
						Para nuestro proyecto decidimos basarnos en el sitio web de{" "}
						<a href="http://cultocafe.uy" className="about-text-culto">
							CULTO CAFÉ
						</a>
						, tomando su diseño minimalista como la raíz de una página web simple y
						fácil de usar pero atractiva y con detalles que destaquen, propios de la
						identidad de la marca.
					</p>
				</div>
				<div className="about-scroll-image">
					<h2>Detalles</h2>
				</div>
				<div className="col-12 col-md-8 m-auto about-text">
					<p>
						Utilizamos{" "}
						<a className="about-text-trello" href="http://trello.com">
							Trello
						</a>{" "}
						para organizarnos, dividirnos tareas y para llevar al día el proceso de
						desarrollo de nuestro sitio web. Llevamos a cabo reuniones al empezar,
						durante y también antes de terminar cada jornada de trabajo, para
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
							<SiSequelize size={45} />
							<p>Sequelize</p>
						</div>
						<div className="tecnology-applied">
							<SiJsonwebtokens size={45} />
							<p>JWT</p>
						</div>
						<div className="tecnology-applied">
							<SiBootstrap size={45} />
							<p>Bootstrap</p>
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
				</div>
			</div>
		</>
	);
}

export default AboutUs;

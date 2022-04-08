import React from "react";
import { Link } from "react-router-dom";

function Footer() {
	return (
		<div className="text-white mb-0 mt-auto mt-5">
			<div className=" pt-5 w-100 bg-black">
				<div className="container">
					<div className="row py-2">
						<div className="col-md-3 col-sm-6 col text-start">
							<h6 className="mb-3">
								<strong>Contacto</strong>
							</h6>
							<p>contacto@contacto.uy</p>
							<p>091 234 567</p>
						</div>
						<div className="col-md-3 col-sm-6 col text-start">
							<h6 className="mb-3">
								<strong>Tienda</strong>{" "}
							</h6>
							<div className="text-start text-start">
								<Link to={"/"} className="d-block text-white mb-3">
									Home
								</Link>
								<Link to={"/shop"} className="d-block text-white mb-3">
									Shop
								</Link>
								<Link to={"/aboutus"} className="d-block text-white mb-3">
									Nosotros
								</Link>
							</div>
						</div>
						<div className="col-md-3 col-sm-6 col text-start">
							<h6 className="mb-3">
								<strong>Síguenos</strong>
							</h6>
							<div className="text-start text-start">
								<a href="https://www.instagram.com/losi_skateboards/">Instagram</a>
							</div>
						</div>
						<div className="col-md-3 col-sm-6 col pt-2 ms-auto text-start">
							<h6 className="mb-3">Suscríbete</h6>
							<p>
								Recibirás todas las novedades de LOSI, nuevos lanzamientos y
								promociones.
							</p>
							<div className=" ">
								<input type="email" placeholder="nombre@mail.com" className="rounded" />
								<button className="btn-dark ">Suscribirme</button>
							</div>
						</div>
					</div>
				</div>
				<hr />
				<div className="container">
					<div className="d-flex justify-content-between  pt-2">
						<p>© 2022 LOSI SKATE CO.</p>

						<p>
							By
							<a href="https://www.linkedin.com/in/luis-zunino/"> L. Zunino, </a>
							<a href="https://www.linkedin.com/in/nico-del-valle-dev/">
								N. del Valle,
							</a>
							<a href="https://www.linkedin.com/in/carlos-garcia-arocena-fernandez/">
								{" "}
								C. García Arocena{" "}
							</a>
							y<a href="https://www.linkedin.com/in/mauroraviolo/"> M. Raviolo.</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;

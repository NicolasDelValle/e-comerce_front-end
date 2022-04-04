import React from "react";
import Footer from "./Footer";
import NavigationBar from "./NavigationBar";

import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { BiError } from "react-icons/bi";

function NoMatch() {
	return (
		<>
			<NavigationBar />
			<div
				className="container d-flex flex-column justify-content-center align-items-center mt-5"
				style={{ height: "50vh" }}
			>
				<div className="m-auto">
					<BiError size={60} />
					<h1 className="fs-2 mt-2 my-5">
						Lo sentimos, la página que nos solicita no existe.
					</h1>
					<Link to={"/"} className="text-white text-decoration-none">
						<Button className="rounded-pill bg-black" size="md" variant="dark">
							Ir al inicio
						</Button>
					</Link>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default NoMatch;

import Footer from "../../components/Footer";
import NavigationBar from "../../components/NavigationBar";
import { Link } from "react-router-dom";

function ThankYou() {
	return (
		<>
			<NavigationBar />
			<div className="m-auto">
				<h1>¡Gracias por comprar en LOSI!</h1>
				<p>Nos comunicaremos contigo para coordinar el envío de tu pedido.</p>
				<Link to={"/"}>
					<button
						className="btn btn-dark rounded-pill mt-3 go-home"
						style={{ fontSize: "0.75rem" }}
					>
						Ir a Home
					</button>
				</Link>
			</div>
			<Footer />
		</>
	);
}

export default ThankYou;

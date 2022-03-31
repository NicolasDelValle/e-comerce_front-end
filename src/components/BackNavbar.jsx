import { Link } from "react-router-dom";
import "./css/backNavbar.css";

function BackNavbar({ addOns }) {
	return (
		<div className="back-navbar bg-dark">
			{addOns}
			<span>
				<Link to="/">
					<i className="bi bi-house"></i>
				</Link>
			</span>
		</div>
	);
}

export default BackNavbar;

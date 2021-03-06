import { useState, useEffect } from "react";
import { Col, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import DetailsButton from "./DetailsButton";
import "./css/ProductCard.css";

function ProductCard({ product }) {
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Col md={6} lg={3} className="productCard rounded pt-1 pb-3">
				<Link to={`/products/${product.slug}`}>
					<div className=" p-1 text-black">
						<span className="py-2" min-height="220px">
							{isLoading && (
								<div
									className="d-flex justify-content-center align-items-center"
									style={{ height: "220px" }}
								>
									<Spinner animation="border" role="status">
										<span className="visually-hidden">Loading...</span>
									</Spinner>
								</div>
							)}
							<img
								className={isLoading ? "d-none" : "w-auto mb-2"}
								height="220px"
								// agregar supabaseurl para imagenes de la DB
								// src={product && `https://cybmmybwfbmxasdepuyj.supabase.co/storage/v1/object/public/images/${product.imageUrl}`}
								src={product.imageUrl}
								alt={product.name}
								onLoad={() => setIsLoading(false)}
							/>
							<p className="product-info mt-2 text-center">
								<strong>{product.name}</strong>
							</p>
							<p className="product-info  text-center">
								<strong>${product.price}</strong>
							</p>
						</span>
						<div className="d-flex justify-content-center mt-2">
							<DetailsButton />
						</div>
					</div>
				</Link>
			</Col>
		</>
	);
}

export default ProductCard;

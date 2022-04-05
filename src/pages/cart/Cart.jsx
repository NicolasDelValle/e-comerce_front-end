import { FaCcVisa, FaCcMastercard, FaCcPaypal } from "react-icons/fa";
import { FcLock } from "react-icons/fc";
import { BsCart3 } from "react-icons/bs";
import { Container, Row, Col, Button } from "react-bootstrap";
import NavigationBar from "../../components/NavigationBar";
import CartItem from "../../components/CartItem";
import Footer from "../../components/Footer";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import React from "react";
import "./cart.css";

function Cart() {
	const { cart, user } = useSelector((state) => state);
	const SubTotalCost = cart.reduce(function (prev, product) {
		return prev + Number(product.price) * product.quantity;
	}, 0);

	const total = SubTotalCost * 1.21;

	return (
		<>
			<NavigationBar />
			<Container className="mt-5">
				{cart.length !== 0 ? (
					<Row className="d-flex justify-content-center">
						<Col md={12} lg={6} className="pe-lg-0">
							{cart.map((product, i) => (
								<CartItem
									key={i}
									url={product.imageUrl}
									price={product.price}
									mountProp={product.quantity}
									name={product.name}
									stock={product.stock}
									productId={product.id}
								/>
							))}
						</Col>
						<Col md={12} lg={4}>
							<div className="border p-3 mb-3">
								<div className="border-bottom d-flex align-items-start mb-2 fs-5 fw-bold">
									<span>TOTAL DEL CARRITO</span>
								</div>
								<div className="d-flex align-items-start mb-2">
									<span>Subtotal</span>
									<span className="fs-4 ms-auto">{SubTotalCost}</span>
								</div>
								<div className="d-flex align-items-start mb-2">
									<span>Total</span>
									<span className="fs-4 ms-auto">{total}</span>
								</div>
								<div>
									<Link to={user.newToken ? "/cart/checkout" : "/login"}>
										<Button
											className="rounded-pill w-100 px-auto py-1 text-decoration-none"
											variant="dark"
											size="lg"
										>
											Finalizar Compra
										</Button>
									</Link>
								</div>
								<div className="d-flex pt-2 justify-content-between">
									<div className=" align-items-center justify-content-end">
										<FcLock size={25} />
									</div>
									<div className=" align-items-center justify-content-end">
										<FaCcVisa size={30} className="ms-1" />
										<FaCcMastercard size={30} className="ms-1" />
										<FaCcPaypal size={30} className="ms-1" />
									</div>
								</div>
							</div>
						</Col>
					</Row>
				) : (
					<div
						className="container d-flex flex-column justify-content-center align-items-center"
						style={{ height: "50vh" }}
					>
						<div className="m-auto">
							<BsCart3 size={60} />
							<h1 className="fs-2 mt-2 my-5">
								No has agregado artículos al carrito aún.
							</h1>
							<Link to={"/shop"} className="text-white text-decoration-none">
								<Button className="rounded-pill bg-black" size="md" variant="dark">
									Volver a la tienda
								</Button>
							</Link>
						</div>
					</div>
				)}
			</Container>
			<Footer />
		</>
	);
}

export default Cart;

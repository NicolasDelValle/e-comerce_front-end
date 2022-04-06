import "./shopStyles.css";

import React, { useEffect, useState } from "react";
import NavigationBar from "../../components/NavigationBar";
import Footer from "../../components/Footer";

import ProductCard from "../../components/ProductCard";
import axios from "axios";

function Shop(props) {
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);
	const [apiCategories, setApiCategories] = useState([]);
	const [apiProducts, setApiProducts] = useState([]);
	const [itemTitle, setItemTitle] = useState("");

	useEffect(() => {
		const getCategories = async () => {
			const { data } = await axios({
				method: "get",
				url: `${process.env.REACT_APP_API_URL}categories`,
			});
			setApiCategories(data);
			setCategories(data);
		};
		const getProducts = async () => {
			const { data } = await axios({
				method: "get",
				url: `${process.env.REACT_APP_API_URL}products`,
			});
			setApiProducts(data);
			setProducts(data);
		};
		getCategories();
		getProducts();
		console.log(categories);
		console.log(products);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleSearch = (e) => {
		if (e !== "") {
			setItemTitle(e);
			setProducts(
				apiProducts.filter((product) => product.name.toLowerCase().includes(e))
			);
		} else {
			setProducts(apiProducts);
			setCategories(apiCategories);
		}
	};

	return (
		<>
			<NavigationBar className="bg-dark" />
			<div className="section">
				<div className="container product-category-section pt-3">
					<div className="row search mt-4 d-flex justify-content-center ">
						<input
							type="text"
							name="search"
							className=" w-25 py-2"
							value={itemTitle}
							placeholder="¿Qué estás buscando?"
							id=""
							onChange={(e) => {
								handleSearch(e.target.value.toLowerCase());
							}}
						/>
					</div>
					{categories.map(
						(category, i) =>
							products.some((product) => product.categoryId === category.id) && (
								<div key={i} className="row  d-flex justify-content-center">
									<h2 className="my-4">{category.name}</h2>
									{products
										.filter((product) => product.categoryId === category.id)
										.map((filteredProduct) => (
											<ProductCard key={filteredProduct.id} product={filteredProduct} />
										))}{" "}
								</div>
							)
					)}
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Shop;

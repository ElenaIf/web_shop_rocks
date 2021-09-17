import React, { useEffect } from "react";
import { initializeProducts } from "./store/actions";
import { useDispatch } from "react-redux";

import ProductList from "./components/ProductList";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(initializeProducts());
	}, [dispatch]);

	return (
		<div className="container">
			<header>
				<a href="/">Rock Web Shop</a>
			</header>
			<main>
				<h1>Product list</h1>
				<ProductList />
				<button>Add</button>
			</main>
			<footer>Elena Ivankina. 2021. All rights reserved.</footer>
		</div>
	);
}

export default App;

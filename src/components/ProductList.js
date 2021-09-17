import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { initializeProducts } from "../store/actions";

const ProductList = () => {
	const products = useSelector((state) => state);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(initializeProducts());
	}, [dispatch]);

	return (
		<ul>
			{products.map((product) => (
				<li key={product.id}>{product.title}</li>
			))}
		</ul>
	);
};

export default ProductList;

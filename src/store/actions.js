import { getAll } from "../services/products";

export const FETCH_PRODUCTS = "FETCH_PRODUCTS";

export const initializeProducts = () => {
	return async (dispatch) => {
		const products = await getAll();
		dispatch({
			type: FETCH_PRODUCTS,
			data: products,
		});
	};
};

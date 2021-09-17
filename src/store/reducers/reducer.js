import * as actionTypes from "../actions";

const reducer = (state = [], action) => {
	switch (action.type) {
		case actionTypes.FETCH_PRODUCTS:
			return action.data;

		default:
			return state;
	}
};

export default reducer;

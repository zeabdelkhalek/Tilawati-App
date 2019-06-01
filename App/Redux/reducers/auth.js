import { AUTH_SET_TOKEN, AUTH_REMOVE_TOKEN, LOGIN_ERROR, AUTH_SET_USER } from '../actions/actionTypes';

const initialState = {
	token: null,
	expiryDate: null,
	error: '',
	name: '',
	photo: null
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case AUTH_SET_TOKEN:
			return {
				...state,
				token: action.token,
				expiryDate: action.expiryDate
			};
		case AUTH_SET_USER:
			return {
				...state,
				name: action.name,
				photo: action.photo
			};
		case AUTH_REMOVE_TOKEN:
			return {
				...state,
				token: null,
				expiryDate: null
			};
		case LOGIN_ERROR:
			return {
				...state,
				error: action.error
			};
		default:
			return state;
	}
};

export default reducer;

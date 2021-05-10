import axios from 'axios';
import { 
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT, 
    USER_REGISTER_FAIL, 
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS, 
} from '../constants/user';

export const register = (name, email, password) => async dispatch => {
	try {
		dispatch({
			type: USER_REGISTER_REQUEST,
		});

		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const { data } = await axios.post(
			'/register',
			{ name, email, password },
			config
		);

		dispatch({
			type: USER_REGISTER_SUCCESS,
			payload: data,
		});

		localStorage.setItem('userInfo', JSON.stringify(data));
	} catch (err) {
		console.log(err);
		dispatch({
			type: USER_REGISTER_FAIL,
			payload: err.response?.data.message
				? err.response.data.message
				: err.message,
		});
	}
};

export const login = (email, password) => async (dispatch) => {
	try {
		dispatch({
			type: USER_LOGIN_REQUEST,
		});

		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const { data } = await axios.post(
			'/login',
			{ email, password },
			config
		);

		dispatch({
			type: USER_LOGIN_SUCCESS,
			payload: data,
		});

		localStorage.setItem('userInfo', JSON.stringify(data));
	} catch (err) {
		console.log(err);
		dispatch({
			type: USER_LOGIN_FAIL,
			payload: err.response?.data.message
				? err.response.data.message
				: err.message,
		});
	}
};

export const logout = () => (dispatch) => {
	localStorage.removeItem('userInfo');

	dispatch({
		type: USER_LOGOUT,
	});
};
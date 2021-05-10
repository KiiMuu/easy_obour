import { 
    USER_LOGIN_FAIL, 
    USER_LOGIN_REQUEST, 
    USER_LOGIN_SUCCESS, 
    USER_LOGOUT,
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
} from "../constants/user";

export const userReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_LOGIN_REQUEST:
        case USER_REGISTER_REQUEST:
			return {
				loading: true,
			};
		case USER_LOGIN_SUCCESS:
		case USER_REGISTER_SUCCESS:
			return {
				userInfo: action.payload,
				loading: false,
			};
		case USER_LOGIN_FAIL:
		case USER_REGISTER_FAIL:
			return {
				error: action.payload,
				loading: false,
			};
		case USER_LOGOUT:
			return {};
		default:
			return state;
	}
}
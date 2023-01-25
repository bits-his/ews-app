// USERsReducer.js
import { CREATE_USER, UPDATE_USER, UPDATE_USERS, AUTH_USER, LOGOUT } from '../actions/constants'

const defaultState = {
	authenticated: false,
	user: {},
	users: [],
	errors: [],
	notifications: [],
};

const authReducer = (state = defaultState, action = {}) => {
	switch (action.type) {
		case CREATE_USER:
			return {
				...state,
				users: [...state.users, action.payload.user],
				agents: [...state.agents, action.payload.agent]
			};
		case AUTH_USER:
			return {
				...state,
				user: action.payload.user,
				agent: action.payload.agent,
				business: action.payload.business,
				selected_business: action.payload.business[0],
				authenticated: action.payload.success
			};
		case UPDATE_USER:
			return {
				...state,
				user: action.payload.user,
				agent: action.payload.agent
			};
		case UPDATE_USERS:
			return {
				...state,
				users: [...state.users, action.payload.user],
				agents: [...state.agents, action.payload.agent]
			};

		case LOGOUT:
			return { ...state, user: {}, agent: {}, authenticated: false };
		default:
			return state;
	}
};

export default authReducer;
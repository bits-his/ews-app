// USERsReducer.js
import { CREATE_USER, UPDATE_USER, UPDATE_USERS, AUTH_USER, LOGOUT, AUTH_ERROR, ONBOARDINGERROR } from '../actions/constants'

const defaultState = {
	authenticated: false,
	user: {},
	users: [],
	errors: [],
	onboardingError:{},
	notifications: [],
};

const authReducer = (state = defaultState, action = {}) => {
	switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        users: [...state.users, action.payload.user],
      };
    case AUTH_USER:
      return {
        ...state,
        user: action.payload.user,
        authenticated: action.payload.success,
      };
    case AUTH_ERROR:
      return {
        ...state,
        errors: action.payload,
      };
    case UPDATE_USER:
      return {
        ...state,
        user: action.payload.user,
      };
    case UPDATE_USERS:
      return {
        ...state,
        users: [...state.users, action.payload.user],
      };
    case ONBOARDINGERROR:
      return {
        ...state,
        onboardingError: action.payload,
      };
    case LOGOUT:
      return { ...state, user: {}, authenticated: false };
    default:
      return state;
  }
};

export default authReducer;
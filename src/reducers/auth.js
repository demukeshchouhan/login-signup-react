import { userConstants } from "../constants/";
const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    //   login

    case userConstants.USER_LOGIN_REQUEST:
      return { loggingIn: true, user: action.payload };
    case userConstants.USER_LOGIN_SUCCESS:
      return { loggedIn: true, user: action.payload };
    case userConstants.USER_LOGIN_FAILURE:
      return { ...state };

    // logout
    case userConstants.USER_LOGOUT_REQUEST:
      return { ...state };

    default:
      return state;
  }
};

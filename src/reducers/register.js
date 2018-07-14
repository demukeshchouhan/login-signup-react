import { userConstants } from "../constants/";
const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    // register
    case userConstants.USER_REGISTER_REQUEST:
      return { registering: true };
    case userConstants.USER_REGISTER_SUCCESS:
      return { registered: true, user: action.user };
    case userConstants.USER_REGISTER_FAILURE:
      return { error: action.error };

    default:
      return state;
  }
};

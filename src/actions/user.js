import axios from "axios";
import { userConstants } from "../constants/";

const success = payload => ({
  type: userConstants.USER_LOGIN_SUCCESS,
  payload
});

const request = payload => ({
  type: userConstants.USER_LOGIN_REQUEST,
  payload
});

const login = payload => {
  return dispatch => {
    dispatch(request(payload));
    const url = `https://reqres.in/api/users`;
    axios({
      url: url,
      method: "POST"
    }).then(data => {
      dispatch(success(data));
    });
  };
};

const logout = () => ({});

const userActions = {
  login,
  logout
};
export default userActions;

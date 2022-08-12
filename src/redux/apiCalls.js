import { loginStart, loginSuccess, loginFailure, logout } from "./userRedux";
import { clearCart } from "./cartRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  console.log("here");
  dispatch(loginStart(user));
  try {
    const res = await publicRequest.post("auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const userLogout = async (dispatch) => {
  dispatch(clearCart());
  dispatch(logout());
};

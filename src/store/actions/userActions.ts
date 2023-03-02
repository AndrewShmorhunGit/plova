import { AppDispatch } from "../index";
import { userSlice } from "../slices/userSlice";
import {
  IUserSignIn,
  IUserSignUp,
  SignInResponse,
} from "../../modules/modules";
import axios from "../../axios";

export const userActions = userSlice.actions;

export const fetchLogin = (user: IUserSignIn) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(userActions.fetchingLogin());
      const response = await axios.post<SignInResponse>(`/auth/signin`, user);
      dispatch(userActions.fetchLoginSuccess(response.data));
      dispatch(userActions.setUserData(response.data));
      localStorage.setItem("user", JSON.stringify(response.data));
    } catch (error) {
      dispatch(userActions.fetchLoginError(error as Error));
    }
  };
};

export const fetchRegister = (user: IUserSignUp) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(userActions.fetchingRegister());
      const response = await axios.post<SignInResponse>(`/auth/signup`, user);
      dispatch(userActions.fetchRegisterSuccess(response.data));
      localStorage.setItem("user", JSON.stringify(response.data));
    } catch (error) {
      dispatch(userActions.fetchRegisterError(error as Error));
    }
  };
};

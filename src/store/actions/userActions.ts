// import { wait } from "../../units/functions";
// import { user } from "../../units/data/userData";
import { AppDispatch } from "../index";
import { userSlice } from "../slices/userSlice";
import {
  IUserSignIn,
  IUserSignUp,
  SignInResponse,
} from "../../modules/modules";
import axios from "../../axios";

export const fetchLogin = (user: IUserSignIn) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(userSlice.actions.fetchingLogin());
      const response = await axios.post<SignInResponse>(`/auth/signin`, user);
      dispatch(
        userSlice.actions.fetchLoginSuccess(JSON.stringify(response.data))
      );
      console.log(`Login POST response: ${response.data}`);
    } catch (error) {
      dispatch(userSlice.actions.fetchLoginError(error as Error));
    }
  };
};

export const fetchRegister = (user: IUserSignUp) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(userSlice.actions.fetchingRegister());
      const response = await axios.post<SignInResponse>(`/auth/signup`, user);
      dispatch(
        userSlice.actions.fetchRegisterSuccess(JSON.stringify(response.data))
      );
      console.log(`Register POST response: ${response.data}`);
    } catch (error) {
      dispatch(userSlice.actions.fetchRegisterError(error as Error));
    }
  };
};

export const fetchJWT = (userID: IUserSignUp) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(userSlice.actions.fetchingJWT());
      const response = await axios.get<any>(`/users/${userID}`);
      dispatch(userSlice.actions.fetchJWTSuccess(response.data));
      console.log(`JWT GET response: ${response.data}`);
    } catch (error) {
      dispatch(userSlice.actions.fetchJWTError(error as Error));
    }
  };
};

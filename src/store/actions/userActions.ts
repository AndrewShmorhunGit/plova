// import { wait } from "../../units/functions";
// import { user } from "../../units/data/userData";
import { AppDispatch } from "../index";
import { userSlice } from "../slices/userSlice";
import { IUser } from "../../modules/modules";
import axios from "../../axios";

export const fetchLogin = (user: IUser) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(userSlice.actions.fetchingLogin());
      const response = await axios.post<IUser>(`/user/login`);
      dispatch(userSlice.actions.fetchLoginSuccess(response.data));
      console.log(`Login POST response: ${response.data}`);
    } catch (error) {
      dispatch(userSlice.actions.fetchLoginError(error as Error));
    }
  };
};

export const fetchRegister = (user: IUser) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(userSlice.actions.fetchingRegister());
      const response = await axios.post<any>(`/users`);
      dispatch(userSlice.actions.fetchRegisterSuccess(response.data));
      console.log(`Register POST response: ${response.data}`);
    } catch (error) {
      dispatch(userSlice.actions.fetchRegisterError(error as Error));
    }
  };
};

export const fetchJWT = (user: IUser) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(userSlice.actions.fetchingJWT());
      const response = await axios.get<any>(`/`);
      dispatch(userSlice.actions.fetchJWTSuccess(response.data));
      console.log(`JWT GET response: ${response.data}`);
    } catch (error) {
      dispatch(userSlice.actions.fetchJWTError(error as Error));
    }
  };
};

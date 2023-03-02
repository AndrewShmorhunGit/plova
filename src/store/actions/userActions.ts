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

export const userActions = userSlice.actions;

export const fetchLogin = (user: IUserSignIn) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(userActions.fetchingLogin());
      const response = await axios.post<SignInResponse>(`/auth/signin`, user);
      dispatch(userActions.fetchLoginSuccess(response.data));
      dispatch(userActions.setUserData(response.data));
      dispatch(userActions.toggleRegisterModal());
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
      console.log(`Register POST response: ${response.data}`);
    } catch (error) {
      dispatch(userActions.fetchRegisterError(error as Error));
    }
  };
};

export const fetchJWT = (
  userID: string,
  JWT: string,
  dispatch: AppDispatch
) => {
  let config = {
    method: "get",
    url: `${process.env.REACT_APP_BASE_URL}/users/${userID}`,
    headers: {
      Authorization: `Bearer ${JWT}`,
      // "Content-Type": "application/json",
    },
    // data: data,
  };

  axios(config)
    .then(function (response: any) {
      () => {
        dispatch(userActions.setUserData(response.data));
        localStorage.setItem("user", JSON.stringify(response.data));
      };
    })
    .catch(function (error: any) {
      console.log(error);
    });
};

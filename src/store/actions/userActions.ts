import { wait } from "../../units/functions";
import { user } from "../../units/data/userData";
import { AppDispatch } from "../index";
import { userSlice } from "../slices/userSlice";
import { IUser } from "../../modules/modules";

const mockFetchGetUser = (userLoginObject: IUser) => {
  userLoginObject.email === user.email &&
  userLoginObject.password === user.password
    ? console.log("The user is:", user)
    : console.log("Sorry, wrong user email or password");
  if (user === undefined) {
    throw new Error("Sorry, wrong menu address");
  }
  return user;
};

// const mockFetchRegisterUser = (userRegistrationObject: IUser) => {
//   if (user === undefined) {
//     throw new Error("Sorry, wrong menu address");
//   }
//   return user;
// };

export const fetchUserLogin = (user: IUser) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(userSlice.actions.fetching());
      const response = await wait(() => mockFetchGetUser(user), 2000);
      dispatch(userSlice.actions.fetchSuccess(response));
    } catch (error) {
      dispatch(userSlice.actions.fetchError(error as Error));
    }
  };
};

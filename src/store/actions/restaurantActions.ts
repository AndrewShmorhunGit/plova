import { AppDispatch } from "../index";
import axios from "../../axios";

import restaurantsSlice from "../slices/restaurantsSlice";

export const fetchRestaurants = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(restaurantsSlice.actions.fetching());
      const response = await axios.get("/restaurants");
      console.log(response);
      // dispatch(restaurantsSlice.actions.fetchSuccess(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

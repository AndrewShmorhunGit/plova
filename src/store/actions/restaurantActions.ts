import { AppDispatch } from "../index";
import axios from "../../axios";
import { ResponseRestaurants } from "../../modules/modules";
import { restaurantsSlice } from "../slices/restaurantsSlice";

import restaurantsSlice from "../slices/restaurantsSlice";

export const fetchRestaurants = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(restaurantsSlice.actions.fetching());
      const response = await axios.get<ResponseRestaurants, any>(
        "/restaurants"
      );
      dispatch(restaurantsSlice.actions.fetchSuccess(response.data));
    } catch (error) {
      dispatch(restaurantsSlice.actions.fetchError(error as Error));
    }
  };
};

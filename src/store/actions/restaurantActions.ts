import { AppDispatch } from "../index";
import axios from "../../axios";
import { ResponseRestaurants } from "../../modules/modules";
import { restaurantsSlice } from "../slices/restaurantsSlice";

export const restaurantActions = restaurantsSlice.actions;

export const fetchRestaurants = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(restaurantActions.fetching());
      const response = await axios.get<ResponseRestaurants, any>(
        "/restaurants"
      );
      dispatch(restaurantActions.fetchSuccess(response.data));
    } catch (error) {
      dispatch(restaurantActions.fetchError(error as Error));
    }
  };
};

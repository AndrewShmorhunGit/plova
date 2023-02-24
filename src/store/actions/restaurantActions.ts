import { AppDispatch } from "../index";
// import axios from "../../axios";
import { ResponseRestaurants } from "../../modules/modules";
import { restaurantsSlice } from "../slices/restaurantsSlice";
import axios from "axios";

export const restaurantActions = restaurantsSlice.actions;

export const fetchRestaurants = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(restaurantActions.fetching());
      const response = await axios.get<ResponseRestaurants, any>(
        "https://81fa40f9-1e32-4635-8ea2-d4d5fcbae917.mock.pstmn.io/restaurants"
      );
      dispatch(restaurantActions.fetchSuccess(response.data));
    } catch (error) {
      dispatch(restaurantActions.fetchError(error as Error));
    }
  };
};

import { AppDispatch } from "../index";
import axios from "../../axios";
import { ResponseRestaurants } from "../../modules/modules";

export const fetchRestaurants = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await axios.get<ResponseRestaurants>("/restaurants");
      // console.log(JSON.stringify(response));
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
};

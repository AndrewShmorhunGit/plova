import { AppDispatch } from "../index";
import axios from "../../axios";

export const fetchRestaurants = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await axios.get("/restaurants");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
};

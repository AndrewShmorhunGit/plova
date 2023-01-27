import axios from "../../axios";
import { IMenu } from "../../modules/modules";
import { AppDispatch } from "../index";
import { menusSlice } from "../slices/menuSlice";

export const fetchMenu = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(menusSlice.actions.fetching());
      const response = await axios.get<IMenu[], any>("/menus");
      dispatch(menusSlice.actions.fetchSuccess(response.data));
    } catch (error) {
      dispatch(menusSlice.actions.fetchError(error as Error));
    }
  };
};

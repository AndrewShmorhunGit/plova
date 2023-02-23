import axios from "../../axios";
import { IMenu } from "../../modules/modules";
import { AppDispatch } from "../index";
import { menusSlice } from "../slices/menuSlice";

export const menuActions = menusSlice.actions;

export const fetchMenu = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(menuActions.fetching());
      const response = await axios.get<IMenu[]>("/menus");
      dispatch(menuActions.fetchSuccess(response.data));
    } catch (error) {
      dispatch(menuActions.fetchError(error as Error));
    }
  };
};

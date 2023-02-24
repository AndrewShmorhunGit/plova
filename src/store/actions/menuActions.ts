// import axios from "../../axios";
import axios from "axios";
import { IMenu } from "../../modules/modules";
import { AppDispatch } from "../index";
import { menusSlice } from "../slices/menuSlice";

export const menuActions = menusSlice.actions;

export const fetchMenu = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(menuActions.fetching());
      const response = await axios.get<IMenu[]>(
        "https://81fa40f9-1e32-4635-8ea2-d4d5fcbae917.mock.pstmn.io/menus"
      );
      dispatch(menuActions.fetchSuccess(response.data));
    } catch (error) {
      dispatch(menuActions.fetchError(error as Error));
    }
  };
};

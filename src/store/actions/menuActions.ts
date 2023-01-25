import axios from "../../axios";
import { IMenu } from "../../modules/modules";
// import { wait } from "../../units/functions";
// import { allMenus } from "../../units/menu/BigMenuDataSet";
import { AppDispatch } from "../index";
import { menusSlice } from "../slices/menuSlice";

// const mockFetchMenusRequest = (slug: string) => {
//   const menu = allMenus.find((menu) => menu.slug === slug);
//   if (menu === undefined) {
//     throw new Error("Sorry, wrong menu address");
//   }
//   return menu;
// };

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

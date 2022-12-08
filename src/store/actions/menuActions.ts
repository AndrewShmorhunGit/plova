import { wait } from "../../units/functions";
import { allMenus } from "../../units/menu/BigMenuDataSet";
import { AppDispatch } from "../index";
// import axios from "../../axios";
import { menusSlice } from "../slices/menuSlice";

const mockFetchMenusRequest = (slug: string) => {
  const menu = allMenus.find((menu) => menu.slug === slug);
  if (menu === undefined) {
    throw new Error("Sorry, wrong menu address");
  }
  return menu;
};

export const fetchMenu = (slug: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(menusSlice.actions.fetching());
      const response = await wait(() => mockFetchMenusRequest(slug), 5000);
      dispatch(menusSlice.actions.fetchSuccess(response));
    } catch (error) {
      dispatch(menusSlice.actions.fetchError(error as Error));
    }
  };
};

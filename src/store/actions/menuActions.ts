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
  return (dispatch: AppDispatch) => {
    try {
      dispatch(menusSlice.actions.fetching());
      const response = mockFetchMenusRequest(slug);
      dispatch(menusSlice.actions.fetchSuccess(response));
    } catch (error) {
      dispatch(menusSlice.actions.fetchError(error as Error));
    }
  };
};

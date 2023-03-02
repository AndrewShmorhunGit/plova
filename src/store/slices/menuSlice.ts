import { IMenu } from "../../modules/modules";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface MenuState {
  selectedCategory: string | null;
  loading: boolean;
  error: string;
  menus: IMenu[] | null;
}

const initialState: MenuState = {
  selectedCategory: null,
  loading: false,
  error: "",
  menus: null,
};

export const menusSlice = createSlice({
  name: "menu",
  initialState: initialState,
  reducers: {
    fetching(state) {
      state.loading = true;
    },
    fetchSuccess(state, action: PayloadAction<IMenu[]>) {
      state.loading = false;
      state.menus = action.payload;
    },
    fetchError(state, action: PayloadAction<Error>) {
      state.loading = false;
      state.error = action.payload.message;
    },
    selectCategory(state, action: PayloadAction<string>) {
      state.selectedCategory = action.payload;
    },
    unselectCategory(state) {
      state.selectedCategory = null;
    },
  },
});

export default menusSlice.reducer;

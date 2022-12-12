import { ICart, IMenu } from "../../modules/modules";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MenuState {
  selectedCategory: string | null;
  loading: boolean;
  error: string;
  menu: IMenu | null;
  cart: ICart[];
}

const initialState: MenuState = {
  selectedCategory: null,
  loading: false,
  error: "",
  menu: null,
  cart: [],
};

export const menusSlice = createSlice({
  name: "menu",
  initialState: initialState,
  reducers: {
    fetching(state) {
      state.loading = true;
    },
    fetchSuccess(state, action: PayloadAction<IMenu>) {
      state.loading = false;
      state.menu = action.payload;
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
    addToCart(state, action: PayloadAction<ICart[]>) {
      state.cart = action.payload;
    },
  },
});

export default menusSlice.reducer;

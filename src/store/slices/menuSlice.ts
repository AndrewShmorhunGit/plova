import { IMenu } from "../../modules/modules";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MenuState {
  loading: boolean;
  error: string;
  menu: IMenu | null;
}

const initialState: MenuState = {
  loading: false,
  error: "",
  menu: null,
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
  },
});

export default menusSlice.reducer;

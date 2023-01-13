import { IUser, UserState } from "../../modules/modules";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: UserState = {
  loading: false,
  error: "",
  isActive: false,
  user: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    fetching(state) {
      state.loading = true;
    },
    fetchSuccess(state, action: PayloadAction<IUser>) {
      state.loading = false;
      state.user = action.payload;
      state.isActive = true;
    },
    fetchError(state, action: PayloadAction<Error>) {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default userSlice.reducer;

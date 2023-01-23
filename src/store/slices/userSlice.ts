import { IUser, UserState } from "../../modules/modules";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialUserState: UserState = {
  loading: false,
  error: "",
  isActive: false,
  user: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    fetchingUser(state) {
      state.loading = true;
    },
    fetchUserSuccess(state, action: PayloadAction<IUser>) {
      state.loading = false;
      state.user = action.payload;
      state.isActive = true;
    },
    fetchUserError(state, action: PayloadAction<Error>) {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default userSlice.reducer;

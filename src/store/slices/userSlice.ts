import { IUserSignUp, UserState } from "../../modules/modules";
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
    // Login
    fetchingLogin(state) {
      state.loading = true;
    },
    fetchLoginSuccess(state, action: PayloadAction<string>) {
      state.loading = false;
      state.user = action.payload;
      state.isActive = true;
    },
    fetchLoginError(state, action: PayloadAction<Error>) {
      state.loading = false;
      state.error = action.payload.message;
    },
    // Register
    fetchingRegister(state) {
      state.loading = true;
    },
    fetchRegisterSuccess(state, action: PayloadAction<string>) {
      state.loading = false;
      state.user = action.payload;
      state.isActive = true;
    },
    fetchRegisterError(state, action: PayloadAction<Error>) {
      state.loading = false;
      state.error = action.payload.message;
    },
    // Test JWT
    fetchingJWT(state) {
      state.loading = true;
    },
    fetchJWTSuccess(state, action: PayloadAction<IUserSignUp>) {
      state.loading = false;
      state.user = action.payload;
      state.isActive = true;
    },
    fetchJWTError(state, action: PayloadAction<Error>) {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default userSlice.reducer;

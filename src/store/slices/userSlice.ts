import { SignInResponse, UserState } from "../../modules/modules";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialUserState: UserState = {
  loading: false,
  error: "",
  JWT: "",
  isActive: false,
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    // Login
    fetchingLogin(state) {
      state.loading = true;
    },
    fetchLoginSuccess(state, action: PayloadAction<SignInResponse>) {
      state.loading = false;
      state.user = action.payload.user;
    },
    fetchLoginError(state, action: PayloadAction<Error>) {
      state.loading = false;
      state.error = action.payload.message;
    },
    // Register
    fetchingRegister(state) {
      state.loading = true;
    },
    fetchRegisterSuccess(state, action: PayloadAction<SignInResponse>) {
      state.loading = false;
      state.user = action.payload.user;
    },
    fetchRegisterError(state, action: PayloadAction<Error>) {
      state.loading = false;
      state.error = action.payload.message;
    },
    // Test JWT
    fetchingJWT(state) {
      state.loading = true;
    },
    fetchJWTSuccess(state, action: PayloadAction<SignInResponse>) {
      state.loading = false;
      state.user = action.payload.user;
      // state.isActive = true;
    },
    fetchJWTError(state, action: PayloadAction<Error>) {
      state.loading = false;
      state.error = action.payload.message;
    },
    storeUserData(state, action: PayloadAction<SignInResponse>) {
      state.JWT = action.payload.accessToken;
      state.user = {
        id: action.payload.user.id,
        email: action.payload.user.email,
        name: action.payload.user.name,
        phone: action.payload.user.phone,
      };
    },
    userLogOut(state) {
      state.user = null;
    },
  },
});

export default userSlice.reducer;

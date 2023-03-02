import { SignInResponse, UserState } from "../../modules/modules";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialUserState: UserState = {
  loading: false,
  error: "",
  JWT: null,
  registerModal: false,
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    // Login
    fetchingLogin(state) {},
    fetchLoginSuccess(state, action: PayloadAction<SignInResponse>) {
      state.user = action.payload.user;
      state.loading = false;
    },
    fetchLoginError(state, action: PayloadAction<Error>) {
      state.error = action.payload.message;
      state.loading = false;
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
    setUserData(state, action: PayloadAction<SignInResponse>) {
      state.JWT = action.payload.accessToken;
      state.user = {
        id: action.payload.user.id,
        email: action.payload.user.email,
        name: action.payload.user.name,
        phone: action.payload.user.phone,
      };
    },
    toggleRegisterModal(state) {
      state.registerModal = !state.registerModal;
    },
    closeRegisterModal(state) {
      state.registerModal = false;
    },
    userLogOut(state) {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
});

export default userSlice.reducer;

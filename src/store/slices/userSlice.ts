import { SignInResponse, UserState } from "../../modules/modules";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialUserState: UserState = {
  loading: false,
  error: "",
  JWT: null,
  registerModal: false,
  profileModal: false,
  phoneModal: false,
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    // Login
    fetchingLogin(state) {
      state.loading = true;
      state.error = "";
    },
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
      state.error = "";
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
    setUserPhone(state, action: PayloadAction<{ phone: string }>) {
      state.user && (state.user.phone = action.payload.phone);
    },
    setEditedUser(
      state,
      action: PayloadAction<{ name: string; email: string }>
    ) {
      state.user &&
        (state.user = {
          ...state.user,
          name: action.payload.name,
          email: action.payload.email,
        });
    },
    toggleRegisterModal(state) {
      state.registerModal = !state.registerModal;
    },
    closeRegisterModal(state) {
      state.registerModal = false;
    },
    toggleProfileModal(state) {
      state.profileModal = !state.profileModal;
    },
    togglePhoneModal(state) {
      state.phoneModal = !state.phoneModal;
    },
    userLogOut(state) {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
});

export default userSlice.reducer;

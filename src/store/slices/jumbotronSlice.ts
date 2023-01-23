import { IJumbotron } from "../../modules/modules";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface JumbotronState {
  loading: boolean;
  error: string;
  jumbotron: IJumbotron[];
}

const initialState: JumbotronState = {
  loading: false,
  error: "",
  jumbotron: [],
};

export const jumbotronSlice = createSlice({
  name: "jumbotron",
  initialState: initialState,
  reducers: {
    fetching(state) {
      state.loading = true;
    },
    fetchSuccess(state, action: PayloadAction<IJumbotron[]>) {
      state.loading = false;
      state.jumbotron = action.payload;
    },
    fetchError(state, action: PayloadAction<Error>) {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default jumbotronSlice.reducer;

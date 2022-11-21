import { configureStore } from "@reduxjs/toolkit";
import { plovaApi } from "./plova";

export const store = configureStore({
  reducer: {
    [plovaApi.reducerPath]: plovaApi.reducer,
  },
});

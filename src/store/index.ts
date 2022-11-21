import { configureStore } from "@reduxjs/toolkit";
import { plovaApi } from "./plova/plova.api";

export const store = configureStore({
  reducer: {
    [plovaApi.reducerPath]: plovaApi.reducer,
  },
});

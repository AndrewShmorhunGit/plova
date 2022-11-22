import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { plovaApi } from "./plova/plova.api";
import restaurantReducer from "./slices/restaurantsSlice";

const rootReducer = combineReducers({
  restauramt: restaurantReducer,
});

export const store = configureStore({
  reducer: {
    [plovaApi.reducerPath]: plovaApi.reducer,
    rootReducer,
  },
});

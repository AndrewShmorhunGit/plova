import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import { plovaApi } from "./plova/plova.api";
import restaurantReducer from "./slices/restaurantsSlice";

const rootReducer = combineReducers({
  restaurant: restaurantReducer,
});

export function setupStore() {
  return configureStore({
    reducer: rootReducer,
    // [plovaApi.reducerPath]: plovaApi.reducer,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

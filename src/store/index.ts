// import { plovaApi } from "./plova/plova.api";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import restaurantReducer from "./slices/restaurantsSlice";
import menuReducer from "./slices/menuSlice";
import jumbotronReducer from "./slices/jumbotronSlice";
import cartReducer from "./slices/cartSlice";
import userReducer from "./slices/cartSlice";
export const rootReducer = combineReducers({
  restaurant: restaurantReducer,
  menu: menuReducer,
  jumbotron: jumbotronReducer,
  carts: cartReducer,
  user: userReducer,
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

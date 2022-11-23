import { IRestaurants } from "../../modules/modules";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RestaurantState {
  loading: boolean;
  error: string;
  restaurants: IRestaurants[];
}

const initialState: RestaurantState = {
  loading: false,
  error: "",
  restaurants: [],
};

export const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: initialState,
  reducers: {
    fetching(state) {
      state.loading = true;
    },
    fetchSuccess(state, action: PayloadAction<IRestaurants[]>) {
      state.loading = false;
      state.restaurants = action.payload;
    },
    fetchError(state, action: PayloadAction<Error>) {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default restaurantsSlice.reducer;

import { IRestaurant } from "../../modules/modules";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Restaurant {
  loading: boolean;
  error: string;
  restaurants: IRestaurant[];
}

const initialState: Restaurant = {
  loading: false,
  error: "",
  restaurants: [],
};

export const restaurantsSlice = createSlice({
  name: "restaurant",
  initialState: initialState,
  reducers: {
    fetching(state) {
      state.loading = true;
    },
    fetchSuccess(state, action: PayloadAction<IRestaurant[]>) {
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

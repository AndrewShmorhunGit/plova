import { ICart, newOrder } from "../../modules/modules";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  carts: { [slug: string]: ICart | undefined };
}

const initialState: CartState = {
  carts: {},
};

export const cartSlice = createSlice({
  name: "carts",
  initialState: initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{ slug: string; newOrder: newOrder }>
    ): CartState => {
      const currentCard = state.carts[action.payload.slug];

      if (currentCard !== undefined) {
        const currentOrder = currentCard.order.find(
          (order) => order.name === action.payload.newOrder.name
        );

        if (currentOrder !== undefined) {
          const newAmount =
            currentOrder.amount + action.payload.newOrder.amount;

          const newCarts = {
            ...state.carts,
            [action.payload.slug]: {
              slugName: action.payload.slug,
              order: [
                ...currentCard.order.filter(
                  (order) => order.name !== currentOrder.name
                ),
                { ...currentOrder, amount: newAmount },
              ],
            },
          };

          return { carts: newCarts };
        }

        const newCarts = {
          ...state.carts,
          [action.payload.slug]: {
            slugName: action.payload.slug,
            order: [...currentCard.order, action.payload.newOrder],
          },
        };
        return { carts: newCarts };
      }

      const newCarts = {
        ...state.carts,
        [action.payload.slug]: {
          slugName: action.payload.slug,
          order: [action.payload.newOrder],
        },
      };
      return { carts: newCarts };
    },
  },
});

export default cartSlice.reducer;

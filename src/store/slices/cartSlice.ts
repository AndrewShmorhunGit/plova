import { ICart, newOrder } from "../../modules/modules";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getLocalStorageCart } from "../../units/functions";

interface CartState {
  carts: { [slug: string]: ICart | undefined };
}

const initialState: CartState = {
  carts: getLocalStorageCart(),
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
    toggleCartAmount: (
      state,
      action: PayloadAction<{
        slug: string;
        name: string;
        operation: "inc" | "dec";
      }>
    ): CartState => {
      const currentCard = state.carts[action.payload.slug];
      if (currentCard !== undefined) {
        const currentOrder = currentCard.order.find(
          (order) => order.name === action.payload.name
        );
        if (currentOrder === undefined) {
          return { ...state };
        }
        if (action.payload.operation === "inc") {
          const newAmount = currentOrder.amount + 1;
          const newCarts = {
            ...state.carts,
            [action.payload.slug]: {
              slugName: action.payload.slug,
              order: [
                ...currentCard.order.map((order) => {
                  if (order.name === currentOrder.name) {
                    return { ...order, amount: newAmount };
                  }
                  return order;
                }),
              ],
            },
          };
          return { carts: newCarts };
        }
        if (action.payload.operation === "dec") {
          if (currentOrder.amount === 1) {
            const newCarts = {
              ...state.carts,
              [action.payload.slug]: {
                slugName: action.payload.slug,
                order: [
                  ...currentCard.order.filter(
                    (order) => order.name !== currentOrder.name
                  ),
                ],
              },
            };
            return { carts: newCarts };
          }

          const newAmount = currentOrder.amount - 1;
          const newCarts = {
            ...state.carts,
            [action.payload.slug]: {
              slugName: action.payload.slug,
              order: [
                ...currentCard.order.map((order) => {
                  if (order.name === currentOrder.name) {
                    return { ...order, amount: newAmount };
                  }
                  return order;
                }),
              ],
            },
          };
          return { carts: newCarts };
        }
      }
      return { ...state };
    },
  },
});

export default cartSlice.reducer;

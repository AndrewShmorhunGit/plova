import { ICart, Order } from "../modules/modules";

const carts = new Map<string, ICart>();

export const getCartBySlug = (slug: string): ICart | null =>
  carts.get(slug) ?? null;

export const addToCart = (slug: string, order: Order): ICart => {
  const currentCart = getCartBySlug(slug);

  if (!currentCart) {
    const newCart = { order: [order] };
    carts.set(slug, newCart);
    return newCart;
  }
  currentCart.order.push(order);
  return currentCart;
};

// export const deleteFromCart = (slug: string, order: Order): ICart => {
//   const currentCart = getCartBySlug(slug);
//   if (currentCart) {
//     const newOrdersArray = currentCart.order.find(
//       (someOrder) => someOrder.name !== order.name
//     );
//     const newCart = {
//       order: newOrdersArray,
//     };
//     return newCart;
//   }
//   carts.set(slug, newCart);
// };

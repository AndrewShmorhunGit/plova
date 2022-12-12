import { ICart, Order } from "../modules/modules";

const carts = new Map<string, ICart>();

export const getCartBySlug = (slug: string): ICart | null =>
  carts.get(slug) ?? null;

export const addToCart = (
  slug: string,
  newOrder: Order
): Map<string, ICart> => {
  const currentCart = getCartBySlug(slug);

  if (!currentCart) {
    const newCart = { order: [newOrder] };

    return carts.set(slug, newCart);
  }
  const newCart = { order: [...currentCart.order, newOrder] };

  return carts.set(slug, newCart);
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

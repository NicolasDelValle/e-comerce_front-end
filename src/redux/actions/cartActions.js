import types from "../types";

const actions = {
  addToCart: (data) => {
    return { type: types.ADD_TO_CART, payload: data };
  },
  removeFromCart: (productId) => {
    return { type: types.REMOVE_FROM_CART, payload: productId };
  },
  addFromCart: (productId) => {
    return { type: types.ADD_FROM_CART, payload: productId };
  },
  clearItemInCart: (productId) => {
    return { type: types.CLEAR_ITEM_IN_CART, payload: productId };
  },

  clearCart: { type: types.CLEAR_CART },
};

export default actions;

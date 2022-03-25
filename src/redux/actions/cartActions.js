import types from "../types";

const actions = {
  addToCart: (data) => {
    return { type: types.ADD_TO_CART, payload: data };
  },
  removeFromCart: (data) => {
    return { type: types.REMOVE_FROM_CART, payload: data };
  },
  clearCart: { type: types.CLEAR_CART },
};

export default actions;

import types from "../types";
const initialState = [];
function CartReducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.ADD_TO_CART:
      if (state.some((product) => product.id === payload.id)) {
        return state.map((product) => {
          if (product.id !== payload.id) return product;

          return { ...product, quantity: product.quantity + payload.quantity };
        });
      }
      return [...state, payload];

    case types.REMOVE_FROM_CART:
      return state;
    case types.CLEAR_CART:
      return initialState;
    default:
      return state;
  }
}

export default CartReducer;

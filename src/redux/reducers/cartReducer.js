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
      return state.map((product) => {
        if (product.id !== payload) return product;

        return { ...product, quantity: product.quantity - 1 };
      });

    case types.ADD_FROM_CART:
      return state.map((product) => {
        if (product.id !== payload) return product;

        return { ...product, quantity: product.quantity + 1 };
      });

    // (i => i.Id !== action.payload.Id)}
    case types.CLEAR_ITEM_IN_CART:
      return state.filter((product) => product.id !== payload);

    case types.CLEAR_CART:
      return (state = []);
    default:
      return state;
  }
}

export default CartReducer;

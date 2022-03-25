import types from "../types";
const initialState = {};
function CartReducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.ADD_TO_CART:
      return state;
    case types.REMOVE_FROM_CART:
      return state;
    case types.CLEAR_CART:
      return state;
    default:
      return state;
  }
}

export default CartReducer;

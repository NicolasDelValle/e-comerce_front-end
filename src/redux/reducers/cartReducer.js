import types from "../types";

function CartReducer(state = {}, action) {
  switch (action.type) {
    case types.ADD_TO_CART:
      return action.payload;
    case types.REMOVE_FROM_CART:
      return state;
    case types.CLEAR_CART:
      return state;
    default:
      return state;
  }
}

export default CartReducer;

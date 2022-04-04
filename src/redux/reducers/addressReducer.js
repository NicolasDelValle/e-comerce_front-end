import types from "../types";

const initialState = [];

function AddressReducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.ADD_ADDRESSES:
      return payload.data;

    case types.ADD_ADDRESS:
      return [...state, payload];

    case types.ADD_FROM_CART:
      return state.map((product) => {
        if (product.id !== payload) return product;

        return { ...product, quantity: product.quantity + 1 };
      });

    case types.CLEAR_ADDRESSES:
      return state;

    default:
      return state;
  }
}

export default AddressReducer;

import types from "../types";

const initialState = [];

function AddressReducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.ADD_ADDRESSES:
      return (state = payload);

    case types.ADD_ADDRESS:
      return [...state, payload];

    case types.REMOVE_ADDRESS:
      console.log(payload);
      return state.filter((address) => address.id !== payload);

    case types.CLEAR_ADDRESSES:
      return state;

    default:
      return state;
  }
}

export default AddressReducer;

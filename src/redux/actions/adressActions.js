import types from "../types";

const actions = {
  addAdresses: (data) => {
    return { type: types.ADD_ADDRESSES, payload: data };
  },
  addAdresse: (data) => {
    return { type: types.ADD_ADDRESS, payload: data };
  },
  removeAddress: (addressId) => {
    return { type: types.REMOVE_ADDRESS, payload: addressId };
  },
  clearAddresses: { type: types.CLEAR_ADDRESSES },
};

export default actions;

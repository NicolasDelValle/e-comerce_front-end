import types from "../types";

const actions = {
  addAddresses: (data) => {
    console.log("se realizo el action adresses", data);
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

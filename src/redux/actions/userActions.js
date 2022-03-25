import types from "../types";

const actions = {
  createUser: (data) => {
    return { type: types.CREATE_USER, payload: data };
  },

  deleteUser: { type: types.DESTROY_USER },
};

export default actions;

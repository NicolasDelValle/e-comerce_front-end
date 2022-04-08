import types from "../types";

const actions = {
  changeWelcome: () => {
    return { type: types.CHANGE_WELCOME };
  },
};

export default actions;

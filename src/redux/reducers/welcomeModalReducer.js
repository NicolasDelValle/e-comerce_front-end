import types from "../types";

function welcomeModalReducer(state = true, action) {
  switch (action.type) {
    case types.CHANGE_WELCOME:
      return (state = !state);

    default:
      return state;
  }
}

export default welcomeModalReducer;

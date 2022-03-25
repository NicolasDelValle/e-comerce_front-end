import types from "../types";
const initialState = {};
function UserReducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.CREATE_USER:
      return state;
    case types.DESTROY_USER:
      return initialState;
    default:
      return state;
  }
}

export default UserReducer;

import types from "../types";
const initialState = {};
function UserReducer(state = {}, action) {
  switch (action.type) {
    case types.CREATE_USER:
      return action.payload;
    case types.DESTROY_USER:
      return initialState;
    default:
      return state;
  }
}

export default UserReducer;

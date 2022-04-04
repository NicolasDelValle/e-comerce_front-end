import { combineReducers } from "redux";
import user from "./userReducer";
import cart from "./cartReducer";
import address from "./addressReducer";

const rootReducer = combineReducers({
  user,
  cart,
  address,
});

export default rootReducer;

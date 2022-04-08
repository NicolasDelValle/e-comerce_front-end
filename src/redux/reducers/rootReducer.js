import { combineReducers } from "redux";
import user from "./userReducer";
import cart from "./cartReducer";
import address from "./addressReducer";
import welcomeModal from "./welcomeModalReducer";

const rootReducer = combineReducers({
  user,
  cart,
  address,
  welcomeModal,
});

export default rootReducer;

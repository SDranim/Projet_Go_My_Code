import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import OfferReducer from "./OfferReducer"
import guestReducer from "./GuestReducer";
const rootReducer = combineReducers({
  authReducer,OfferReducer,guestReducer
});

export default rootReducer;




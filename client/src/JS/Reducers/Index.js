import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import OfferReducer from "./OfferReducer"
import guestReducer from "./GuestReducer";
import adminReducer from "./Adminreducer"
const rootReducer = combineReducers({
  authReducer,OfferReducer,guestReducer,adminReducer
});

export default rootReducer;




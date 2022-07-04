import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import OfferReducer from "./OfferReducer"
import guestReducer from "./GuestReducer";
import adminReducer from "./Adminreducer"
import alert from "./AllertReducer"
const rootReducer = combineReducers({
  authReducer,OfferReducer,guestReducer,adminReducer,alert
});

export default rootReducer;




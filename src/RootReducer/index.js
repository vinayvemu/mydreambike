import { combineReducers } from "redux";
import home from "../modules/Home/reducer";
import booking from "../modules/Booking/reducer";

export default combineReducers({
  home,
  booking,
});

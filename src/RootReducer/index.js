import { combineReducers } from "redux";
import home from "../modules/Home/reducer";
import booking from "../modules/Booking/reducer";
import theme from "../modules/Theme/reducer";

export default combineReducers({
  home,
  booking,
  theme,
});

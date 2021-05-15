import { SET_BOOKING_FORM, SET_USER_DATA } from "./actions";

const initialState = {
  showBookingForm: false,
  userData: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKING_FORM:
      return {
        ...state,
        showBookingForm: action.data,
      };
    case SET_USER_DATA:
      return {
        ...state,
        userData: action.data,
      };

    default:
      return state;
  }
};

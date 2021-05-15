export const SET_BOOKING_FORM = "Home/SET_BOOKING_FORM";
export const SET_USER_DATA = "Home/SET_USER_DATA";

export const setShowBookingForm = (data) => ({
  type: SET_BOOKING_FORM,
  data,
});

export const setUserData = (data) => ({
  type: SET_USER_DATA,
  data,
});

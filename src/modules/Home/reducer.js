import { SET_ACTIVE_BIKE } from "./actions";

const initialState = {
  activeBike: "M1",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_BIKE:
      return {
        ...state,
        activeBike: action.data,
      };

    default:
      return state;
  }
};

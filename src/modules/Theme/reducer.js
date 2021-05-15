import { SET_CURRENT_THEME } from "./actions";

const initialState = {
  currentTheme: "light",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_THEME:
      return {
        ...state,
        currentTheme: action.data,
      };

    default:
      return state;
  }
};

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const LOGIN = "LOGIN";
const RESET = "RESET";

const defaultState = 0;

export const counterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
      case RESET:
        return state = 0;
    default:
      return state;
  }
};

export const isLogged = (state = false, action) => {
  switch (action.type) {
    case LOGIN:
      return !state;
    default:
      return state;
  }
};

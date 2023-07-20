const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const LOGIN = 'LOGIN';
const RESET = "RESET";

export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

export const reset = () => {
  return {
    type: RESET
  }
}

export const toggleLog = () => {
  return { type: LOGIN };
};

import { createStore } from "redux";
import { counterReducer, isLogged } from "./Reducers";
import { decrement, increment } from "./Actions";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counter: counterReducer,
  login: isLogged,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// dispatch
store.subscribe(() => console.log(store.getState()));

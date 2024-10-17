import todoReducer from "./reducer";

import {createStore } from "redux";


export default function configureStore() {
  const store = createStore(todoReducer);

  return store;
}

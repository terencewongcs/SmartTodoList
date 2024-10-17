import "./App.css";

import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
function App() {
  return (
    <>
      <h1>My TodoList</h1>
      <Provider store={store}>
      <TodoInput></TodoInput>
      <TodoList></TodoList>
      </Provider>
    </>
  );
}

export default App;

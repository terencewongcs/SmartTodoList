import "./App.css";

import React from "react";
import { Provider } from "react-redux";
import configureStore from "./redux/store";
import TodoList from "./components/todolist";
import TodoInput from "./components/TodoInput";
function App() {
  return (
    <>
    <h1>My TodoList</h1>
    <Provider store={configureStore()}>
        <TodoInput></TodoInput>
        <TodoList></TodoList>
      </Provider>
    </>
  );
}

export default App;

import "./App.css";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import TodoBox from "./components/TodoBox";
function App() {
  return (
    <>
      <h1>My TodoList</h1>
      <Provider store={store}>
        <TodoBox />
      </Provider>
    </>
  );
}

export default App;

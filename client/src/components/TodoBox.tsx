import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodoAsync, fetchTodosAsync } from "../app/todoSlice";
import { Provider } from "react-redux";
import { store } from "../app/store";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";
function TodoBox() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodosAsync());
  }, [dispatch]);

  return (
    <>
        <TodoInput></TodoInput>
        <TodoList></TodoList>
    </>
  );
}

export default TodoBox;

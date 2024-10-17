import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Todo {
  id: number;
  todo: string;
  done: boolean;
}

interface State {
  todos: Todo[];
}

const initialState: State = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    toggleTodo: (state, action:PayloadAction<number>) => {
        state.todos=state.todos.map(todo =>
            todo.id === action.payload ? { ...todo, done: !todo.done } : todo
          );
    },
    createTodo: (state, action:PayloadAction<string>) => {
      state.todos.push({
        id: state.todos.length + 1,
        todo: action.payload,
        done: false
      });
    },
  },
});

export const { toggleTodo, createTodo } = todoSlice.actions;
export default todoSlice.reducer;
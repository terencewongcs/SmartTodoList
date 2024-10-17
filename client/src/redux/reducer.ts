interface Todo {
    id: number;
    todo: string;
    done: boolean;
  }
  
  interface State {
    todos: Todo[];
  }
  
  const initialState: State = {
    todos: []
  };
  
  export default function todoReducer(state = initialState, action:any) {
    switch (action.type) {
      case "TOGGLE_TODO":
        return { ...state,
            todos: state.todos.map(todo =>
                todo.id === action.payload.id ? { ...todo, done: !todo.done } : todo
              ) };
      case "CREATE_TODO":
        return { ...state,
            todos: [
              ...state.todos,
              {
                id: state.todos.length + 1,
                todo: action.payload.text,
                done: false
              }
            ] };
      default:
        return state;
    }
  }
export const createTodo = (text:string) => ({
    type: "CREATE_TODO",
    payload: { text }
  });
  
  export const toggleTodo = (id:string) => ({
    type: "TOGGLE_TODO",
    payload: { id }
  });
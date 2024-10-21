import { PayloadAction, createSlice,createAsyncThunk } from "@reduxjs/toolkit";

interface Todo {
  _id: string;
  todo: string;
  done: boolean;
}

interface TodoState {
  todos: Todo[];
  loading:boolean;
  error:string | null;
}

const initialState: TodoState = {
  todos: [],
  loading:false,
  error:null,
};

export const fetchTodosAsync = createAsyncThunk("todo/fetchTodos", async () => {
  try {
    const res = await fetch("http://localhost:3000");
    const data = await res.json();
    return data;
  } catch (e) {
    const msg: string = e as string;
    console.error(msg);
  }
});

export const createTodoAsync = createAsyncThunk(
  "todo/createTodoAsync",
  async (todo:string) => {
    try {
      const userData = {
        todo:todo
      };
      const res = await fetch("http://localhost:3000/api/todos", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      return data;
    } catch (e) {
      const msg: string = e as string;
      console.error(msg);
    }
  }
);

export const toggleTodoAsync = createAsyncThunk("todo/toggleTodoAsync",async(_id:number)=>{
  try{
    if(_id){
      const todoAddUrl = `http://localhost:3000/api/todos/${_id}`;
      const res = await fetch(todoAddUrl,{
        method:"PUT"
      });
      const data = await res.json();
      return data;
    }
    else{
      throw new Error("invalid id");
    }
    
  }catch(e){
    const msg:string = e as string;
    console.log(msg);
  }
});



const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
    extraReducers: builder => {
      builder
        .addCase(fetchTodosAsync.pending, state => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchTodosAsync.fulfilled, (state, action) => {
          state.todos = action.payload;
          state.loading = false;
        })
        .addCase(fetchTodosAsync.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || 'Failed to fetch todos';
        })
        .addCase(createTodoAsync.fulfilled, (state, action) => {
          state.todos.push({
            _id: action.payload._id,
            todo: action.payload.todo,
            done: false
          });
        })
        .addCase(toggleTodoAsync.fulfilled, (state, action) => {
           state.todos=state.todos.map(todo =>
            todo._id === action.payload._id ? { ...todo, done: !todo.done } : todo
          );
        })
    },
  });

export default todoSlice.reducer;
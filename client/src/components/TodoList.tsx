import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodoAsync, fetchTodosAsync } from "../app/todoSlice";
import { RootState } from "../app/store";

const TodoList: React.FC = () => {
  const {
    todos,loading,error
  } = useSelector((state: RootState) => state.todo);

  const dispatch = useDispatch();

  if (loading === true) return <div>Loading...</div>;

  if (error)
    return <div>Fetching todos failed: {error}</div>;

  return (
    <div>
      <ul>
        {todos?.map((todo: any) => (
          
            <li key={todo._id} className={todo.done ? "done" : ""}>
              <label>
              {todo.todo}
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => dispatch(toggleTodoAsync(todo._id))}
              />
              </label>
            </li>
            
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

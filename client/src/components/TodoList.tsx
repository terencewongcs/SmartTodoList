import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { toggleTodo } from '../redux/action';

const TodoList:React.FC = () => {
    const todosInStore = useSelector((state:any) => state.todos);
    const dispatch = useDispatch();
  return (
    <div>
      <ul>
      {todosInStore.map((todo:any) => (
        <label>
            <li key={todo.id} className={todo.done ?'done':''}>
                {todo.todo}
                <input type='checkbox' checked={todo.done} onChange={()=>dispatch(toggleTodo(todo.id))} />
            </li>
        </label>
    ))}
      </ul>
    </div>
  )
}

export default TodoList
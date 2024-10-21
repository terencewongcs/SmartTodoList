import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { createTodoAsync } from '../app/todoSlice';


const TodoInput:React.FC = () => {
    const [text,setText] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = (event:React.FormEvent)=>{
        event.preventDefault();
        dispatch(createTodoAsync(text));
        setText('');
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' value={text} onChange={(e)=>setText(e.target.value)} placeholder='New Todo' />
        <button type='submit'>Create</button>
      </form>
    </div>
  )
}

export default TodoInput

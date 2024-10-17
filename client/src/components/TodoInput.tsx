import React,{useState} from 'react'
import { useDispatch, UseDispatch } from 'react-redux'
import { createTodo } from '../redux/action'


const TodoInput:React.FC = () => {
    const [text,setText] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = (event:React.FormEvent)=>{
        event.preventDefault();
        dispatch(createTodo(text));
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

import React, {useState} from 'react'
import TodoForm from './TodoForm'

const EditTodoForm = ({editTodo, task}) => {

  const [value, setValue] = useState (task.task)
  const handleSubmit = e => {
    e.preventDefault();

    editTodo(value, task.id)
    //This is used to clear the input field after the value entered in submitted
    setValue ('')
  }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type='text' placeholder='Update todays task' className='todo-input' value={value} onChange={(e) => setValue(e.target.value)}/>
      <button type='ssubmit' className='todo-btn'>Update</button>
    </form>
  )
}

export default EditTodoForm


//NOTES:

//onSubmit={handleSubmit}> This is used to handle what is on the form upon submission

// This line === onChange={(e) => setValue(e.target.value)}/> is used to save the value of the input field on change.
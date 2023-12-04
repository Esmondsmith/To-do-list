import React, {useState} from 'react'

const TodoForm = ({addTodo}) => {

  const [value, setValue] = useState ('')
  const handleSubmit = e => {
    e.preventDefault();

    addTodo(value)
    //This is used to clear the input field after the value entered in submitted
    setValue ('')
  }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type='text' placeholder='Task to do today' className='todo-input' value={value} onChange={(e) => setValue(e.target.value)}/>
      <button type='submit' className='todo-btn'>Add +</button>
    </form>
  )
}

export default TodoForm


//NOTES:

//onSubmit={handleSubmit}> This is used to handle what is on the form upon submission

// This line === onChange={(e) => setValue(e.target.value)}/> is used to save the value of the input field on change.
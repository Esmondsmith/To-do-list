import React, {useState, useEffect, useRef} from 'react' //We import useState to be able to keep track of what the users entered in the input field. while the useEffect and useRef here are used to make focu on the input field for new values and editing old values. 

const TodoForm = ({addTodo}) => {

  const [value, setValue] = useState ('')

  const handleSubmit = e => {
    e.preventDefault(); //To prevent default action of the form.
    if(value === ""){
      alert("please enter a task to do")
    } else {
      addTodo(value)
    //setValue('') is used to clear the input field after the value entered is submitted
      setValue ('')
    }
  }

  const enterRef = useRef()
  useEffect(() => {
    enterRef.current.focus()
  })

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      {/* To get the user input, we add the onChange event to the input field*/}
      <input type='text' placeholder='Task to do today' className='todo-input' value={value} onChange={(e) => {setValue(e.target.value)}} ref={enterRef}/>
      <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}

export default TodoForm


//NOTES:

//onSubmit={handleSubmit}> This is used to handle what is on the form upon submission

// This line === onChange={(e) => setValue(e.target.value)}/> is used to save the value of the input field on change.



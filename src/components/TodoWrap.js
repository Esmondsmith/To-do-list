import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid';
import Todo from './Todo'
import EditTodoForm from './EditTodoForm'
import TodoForm from './TodoForm'


uuidv4();

const TodoWrap = () => {

    const [todos, setTodos] = useState ([])

    const addTodo = todo => {
        setTodos([...todos, {id: uuidv4(), task:todo, completed: false, isEdited: false}])
        console.log(todos)
    }

    const toggleComplete = id =>{
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed} : todo))
    }

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
    }

    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo))
    }


  return (
    <div className='TodoWrap'>
        <h1 className='Todoh1'>Things To Do Today</h1>
      <TodoForm addTodo={addTodo}/>
      {todos.map((todo, index) => (
        todo.isEditing ? (
            <EditTodoForm editTodo={editTask} task={todo}/>
        ) : (
            <Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo}/>
        )
      ))}
    </div>
  )
}

export default TodoWrap


//NOTES:

//To pass the values from the TodoForm to the TodoWrapper, we have to use props

//{todos.map((todo, index) => (<Todo task={todo} key={index} /> ))} This line is used to generate any task entered
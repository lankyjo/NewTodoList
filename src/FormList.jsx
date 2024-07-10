import React from 'react'
import TodoList from './TodoList';

const FormList = ({todos, toggleChecked, deleteTask }) => {
  return (
    <ul className="list">
    {todos <= 0 && 'No New Tasks' }
      {todos.map((todo) => {
        return (
        <TodoList key={todo.id} todo = {todo} toggleChecked ={toggleChecked} deleteTask = {deleteTask} />
        );
      })}
    </ul>
  )
}

export default FormList
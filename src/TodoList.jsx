import React from 'react'

const TodoList = ({todo, toggleChecked, deleteTask }) => {
  return (
    <li>
    <label>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={(e) => toggleChecked(todo.id, e.target.checked)}
      />
      {todo.title}
    </label>
    <button className="btn btn-danger" onClick={()=>deleteTask(todo.id)}>Delete</button>
  </li>
  )
}

export default TodoList
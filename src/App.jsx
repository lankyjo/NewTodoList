import { useEffect, useState } from "react";
import "./styles.css";
import NewTodoForm from "./NewTodoForm";
import FormList from "./FormList";

const App = () => {
  const [todos, setTodos] = useState(()=>{
    const localValue = localStorage.getItem('ITEMS')
    if(localValue === null){
      return []
    }else{
      return JSON.parse(localValue)
    }
  });
  const [task, SetTask] = useState("");

  useEffect(()=>{
    localStorage.setItem('ITEMS', JSON.stringify(todos))
  }, [todos])

  function submit(e) {
    e.preventDefault();
    if (task === ''){
      return null
    }
    else{
      setTodos([
        ...todos,
        {
          id: crypto.randomUUID(),
          title: task,
          completed: false,
        },
      ]);
    };
  
    SetTask("");
  }

  function toggleChecked(id, completed) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
          // [...todo, {completed: checked}]
        }else{
          return todo;
        }
      })
    );
  }

  function deleteTask(id){
    setTodos(
      todos.filter((todo) => todo.id != id)
    )
  }

  return (
    <>

    <NewTodoForm submit ={submit} task = {task} SetTask ={SetTask} />
      <h1 className="header">ToDo list</h1>
    <FormList  todos ={todos} toggleChecked ={toggleChecked} deleteTask = {deleteTask}/>
    </>
  );
};

export default App;

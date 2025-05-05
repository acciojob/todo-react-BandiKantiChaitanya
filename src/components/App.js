
import React, { useState } from "react";
import './../styles/styles.css';
import Todo from "./Todo";

const App = () => {

  let [input,setInput]=useState('')
  let [tasks,setTasks]=useState([])

  function handleInput(e){
    setInput(e.target.value)
  }

  function handleTask(){
    if(input.trim()===' ')return;
    setTasks([...tasks,input])
    setInput('')
    
    // setTask()
  }

  return (
    <div>
      <h1>To-do List</h1>
        <input type="text" className="task" value={input} onChange={handleInput} />
        <button onClick={handleTask} >Add Todo</button>
      <Todo tasks={tasks} setTasks={setTasks}  />
    </div>
  )
}

export default App

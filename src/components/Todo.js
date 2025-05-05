import React from 'react'

function Todo({tasks,setTasks}) {

    function handleRemove(indextoRemove){
        let updatedTask=tasks.filter((_, index)=>index!==indextoRemove)
        setTasks(updatedTask)
    }
  return (
    <div>
        {tasks.map((task,index)=>(
            <div key={index} className='todo-item' >
            <p style={{ margin: 0 }} >{task}</p>
            <button onClick={()=>{handleRemove(index)}} >Remove task</button>
            </div>
        ))}
    </div>
  )
}

export default Todo
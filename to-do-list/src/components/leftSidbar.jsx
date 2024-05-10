import React, { useState } from 'react'
import TeskDetails from './teskDetails'
import Alerts from './ui/alerts'
import AddTask from './addTask'
function leftSidbar({ selectedTodo, setTodo, tab,inputRef,todo ,edit,dlt}) {
 
  return (
    <div className='w-2/5 md:block hidden h-full '>
      {tab == "addTask" ? <div ><AddTask todo={todo} inputRef={inputRef}  selectedTodo={selectedTodo} setTodo={setTodo} /></div> : 
      <TeskDetails dlt={dlt} editFn={edit} selectedTodo={selectedTodo} name={selectedTodo?.name} id={selectedTodo?.id} des={selectedTodo?.des} edited={selectedTodo?.edited ? "true" : "false"} status={selectedTodo?.status} date={selectedTodo?.date} />
    
    }


    </div>
  )
}

export default leftSidbar

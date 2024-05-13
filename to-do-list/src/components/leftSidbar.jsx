import React, { useState } from 'react'
import TeskDetails from './teskDetails'
import Alerts from './ui/alerts'
import AddTask from './addTask'
function leftSidbar({ selectedTodo, setTodo, tab,inputRef,todo ,edit,dlt,complete,overlay,show,taskShow,showClick}) {
 
  return (
    <div className={`md:w-2/5 w-full md:block ${taskShow?'block':'hidden'} h-full `}>
      {tab == "addTask" ? <div ><AddTask  showClick={showClick} overlay={overlay} show={show} todo={todo} inputRef={inputRef}  selectedTodo={selectedTodo} setTodo={setTodo} /></div> : 
      <TeskDetails  showClick={showClick} overlay={overlay} show={show} complete={complete} dlt={dlt} editFn={edit} selectedTodo={selectedTodo} name={selectedTodo?.name} id={selectedTodo?.id} des={selectedTodo?.des} edited={selectedTodo?.edited ? "true" : "false"} status={selectedTodo?.status} date={selectedTodo?.date} />
    
    }


    </div>
  )
}

export default leftSidbar

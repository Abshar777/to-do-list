import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import SideBar from './components/sideBar'
import Main from './components/main'
import date from '@/util/formatDate'
import { Toaster } from 'sonner';

import LeftSidbar from './components/leftSidbar'
import './App.css'

function App() {
  const [active, setActive] = useState(0);
  const [Todo, setTodo] = useState([]);
  const [tab, setTab] = useState("allTask")
  const [selectedTodo, setSelectedTodo] = useState(0)
  const [sidbarShow,setSidbarShow]=useState(false)
  const [taskShow,setTaskShow]=useState(false)
  const inputRef = useRef(null);
  const show=()=>setSidbarShow(!sidbarShow)
  const focusInput = () => inputRef?.current?.focus();
  const editTask = task => {
    setTodo(Todo.map(e=>e.id==task.id?{...e,name:task.name,des:task.des,edited:true}:e))
    localStorage.setItem("todo",JSON.stringify(Todo))
  }
  const dltTodo=(id)=>{
    setTodo(()=>{
      const todo=Todo.filter(e=>e.id!==id)
      localStorage.setItem("todo",JSON.stringify(todo))
      return todo
    })
   
  }
  const complete=(id)=>{setTodo(Todo.map(e=> { return e.id==id?{...e,status:!e.status}:e}))
  localStorage.setItem("todo",JSON.stringify(Todo))
    }
  const taskshow=()=>setTaskShow(!taskShow)


  useEffect(() => {

    if (Todo.length == 0) {
      var item = localStorage.getItem("todo")
      if (item) {
        item = JSON.parse(item)
        setTodo(item)
      }
    }
    return () => { }
  }, [])

  return (
    <div className="dark relative overflow-hidden flex bg-zinc-950 w-full h-[100vh]">
      <Toaster closeButton position="bottom-center" richColors theme='dark' hotkey={["⌥/alt + T"]} />
      <div className="line w-full h-[1px] bg-zinc-800 absolute top-[4rem]"></div>
      <SideBar showClick={taskshow} overlay={show} taskShow={taskShow}  show={sidbarShow} setTab={setTab} tab={tab} active={active} setActive={setActive} />
      <Main showClick={taskshow} taskShow={taskShow} overlay={sidbarShow} show={show} focus={focusInput} setTab={setTab} setActive={setActive} selectedTodo={selectedTodo} setSelectedTodo={setSelectedTodo} setTodo={setTodo} todo={Todo} />
      <LeftSidbar showClick={taskshow} taskShow={taskShow} overlay={sidbarShow} show={show} complete={complete} dlt={dltTodo} edit={editTask} inputRef={inputRef} tab={tab} setTodo={setTodo} todo={Todo} selectedTodo={Todo?.length > 0 && Todo[selectedTodo]} />

    </div>
  )
}

export default App

import { useState } from 'react'
import SideBar from './components/sideBar'
import Main from './components/main'
import './App.css'

function App() {
 

  return (
  <div className="dark relative overflow-hidden flex bg-zinc-950 w-full h-[100vh]">
    <div className="line w-full h-[1px] bg-zinc-800 absolute top-[4rem]"></div>
    <SideBar/>
    <Main/>
    
  </div>
  )
}

export default App

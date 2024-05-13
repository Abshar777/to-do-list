import { useEffect, useState } from "react";
import { CgSortAz } from "react-icons/cg";
import TabButton from "./ui/tab-button";
import arro from '../../public/New Project 130 [AD9D014].png'
import { useRaisedShadow } from "./ui/onRaisedShadow";
import ToDo from "./ui/toDo";
import { Reorder, useMotionValue } from "framer-motion";
import { Item } from "./ui/item";

function main({ todo, setSelectedTodo, selectedTodo, setTab, setActive, focus, setTodo,show ,overlay,taskShow,showClick}) {
  const [serach, setSearch] = useState("");
  const [arr,setArr]=useState(()=>Array.from({length:todo.length}))
  const [todos,setTodos]=useState(todo)

 useEffect(()=>{
  setTodos(todo)
 },[todo])
 const searchfn=()=>setTodos(todo.filter(e=>e.name.includes(serach)||e.des.includes(serach)))
  const click = i => {setTab("allTask"); setActive(0); setSelectedTodo(i)}
  const doneFn=(done)=>{done?setTodos(todo.filter(e=>e.status!==true)):setTodos(todo) }
  return (
    <>
    <div  onClick={()=>{show()}} className={`md:hidden block overlay w-full absolute h-full transition-all ease duration-75 ${overlay?'z-[10] opacity-100':'z-[-9] opacity-0'} bg-[#000000c7] backdrop-blur-sm z-[10]`}></div>
    <div className={`md:w-2/5  ${!taskShow?'block':'hidden'} md:block  px-2 md:px-2 w-full h-full border-r-[1px] border-zinc-800`}>
      {/* navvvvv */}
      <div className="flex nav  py-5   items-center justify-between">
      <i onClick={()=>{show()}} className="ri-menu-2-line block md:hidden cursor-pointer text-white"></i>
        <h1 className="font-bold md:text-3xl text-2xl text-white ">
          TO DO LIST
        </h1>
        <TabButton status={true} click={doneFn} name={['task', "undone"]} className="" />
      </div>
      {/* sercah input */}
      <div className="serachAndFiletr  gap-2 flex relative">
        <div className="cir rounded-full w-[1.7rem] h-[1.7rem] bg-zinc-950 absolute top-[.2rem] left-[.15rem] text-center flex items-center justify-center">
          <i className="ri-search-line text-white"></i>
        </div>
        <input type="text" className="w-full bg-zinc-800 p-1 text-white outline-[0] px-9 rounded-xl" placeholder="serach your task" value={serach} onInput={(e) => setSearch(e.target.value)} />
        <div onClick={searchfn} style={{ transition: "all ease 0.3s" }} className="btn hover:opacity-75 cursor-pointer px-3 flex text-white font-semibold items-center justify-center bg-zinc-800 w-[5rem] h-[1.9rem] rounded-lg">
          serach
        </div>
        <div onClick={()=>setTodos(todo)} className="btn cursor-pointer flex items-center justify-center bg-white w-[2rem] h-[1.9rem] rounded-full">
          <CgSortAz size={35} />
        </div>
      </div>
      <br />
      {/* tasks */}
      <Reorder.Group axis="y" onReorder={setArr}  values={arr} >
        { todos.length>0?todos?.map((e, i) => (
          <ToDo showClick={showClick} click={click} i={i} active={i === selectedTodo} item={e} key={i} />
        )): <div className="w-full h-[60%] flex flex-col gap-2 text-center justify-center items-center">
        <h1 className="font-bold text-white  text-3xl capitalize">task is empty</h1>
        <h1  className="font-bold text-xl text-zinc-300 capitalize">add task</h1>
        <img style={{ objectFit: "cover",height: "10rem",scale: "1.6"}} className="pointer-events-none" src={arro} alt="no imag" />
        <div onClick={()=>{setTab("addTask");focus();showClick(); }}  style={{ transition: "all ease 0.3s" }} className="btn hover:opacity-75 cursor-pointer px-3 flex text-white font-semibold items-center justify-center bg-zinc-800 w-[5rem] h-[1.9rem] rounded-lg">
      Add
      </div>
         </div> }
      </Reorder.Group>
      {/* task end */}
    </div>
    </>
  );
}

export default main;

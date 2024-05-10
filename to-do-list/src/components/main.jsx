import { useEffect, useState } from "react";
import { CgSortAz } from "react-icons/cg";
import TabButton from "./ui/tab-button";
import arro from '../../public/New Project 130 [AD9D014].png'
import ToDo from "./ui/toDo";
function main({todo,setSelectedTodo,selectedTodo,setTab,setActive,focus}) {
  const [serach, setSearch] = useState("");
 
  return (
    <div className="md:w-2/5 px-2 md:px-2 w-full h-full border-r-[1px] border-zinc-800">
      {/* navvvvv */}
      <div className="flex nav  py-5 px-2  items-center justify-between">
        <h1 className="font-bold md:text-3xl text-2xl text-white ">
          TO DO LIST
        </h1>
        <TabButton name={['done',"undone"]} className="" />
      </div>
      {/* sercah input */}
      <div className="serachAndFiletr  gap-2 flex relative">
        <div className="cir rounded-full w-[1.7rem] h-[1.7rem] bg-zinc-950 absolute top-[.2rem] left-[.15rem] text-center flex items-center justify-center">
          <i className="ri-search-line text-white"></i>
        </div>
        <input type="text" className="w-full bg-zinc-800 p-1 text-white outline-[0] px-9 rounded-xl"   placeholder="serach your task" value={serach} onInput={(e) => setSearch(e.target.value)}/>
        <div  style={{ transition: "all ease 0.3s" }} className="btn hover:opacity-75 cursor-pointer px-3 flex text-white font-semibold items-center justify-center bg-zinc-800 w-[5rem] h-[1.9rem] rounded-lg">
          serach
        </div>
        <div className="btn  flex items-center justify-center bg-white w-[2rem] h-[1.9rem] rounded-full">
          <CgSortAz size={35} />
        </div>
      </div>
      <br />
      {/* tasks */}
      <div className="w-full  h-full overflow-scroll">
        {todo?.length>0?todo?.map((e,i)=>(
          <div key={i} onClick={()=>{setTab("allTask");setActive(0); setSelectedTodo(i)}} className="">
            <ToDo active={i===selectedTodo}  name={e.name} date={e.date} des={e.des} status={e.status} edited={e.edited} key={i}/>
          </div>
        )):
        <div className="w-full h-[60%] flex flex-col gap-2 text-center justify-center items-center">
          <h1 className="font-bold text-white  text-3xl capitalize">task is empty</h1>
          <h1  className="font-bold text-xl text-zinc-300 capitalize">add task</h1>
          <img style={{ objectFit: "cover",height: "10rem",scale: "1.6"}} className="pointer-events-none" src={arro} alt="no imag" />
          <div onClick={()=>{setTab("addTask");focus() }}  style={{ transition: "all ease 0.3s" }} className="btn hover:opacity-75 cursor-pointer px-3 flex text-white font-semibold items-center justify-center bg-zinc-800 w-[5rem] h-[1.9rem] rounded-lg">
        Add
        </div>
           </div>}
      </div>
    </div>
  );
}

export default main;

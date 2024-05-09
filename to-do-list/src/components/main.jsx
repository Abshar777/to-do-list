import { useState } from "react";
import { CgSortAz } from "react-icons/cg";
import TabButton from "./ui/tab-button";
import ToDo from "./ui/toDo";
function main() {
  const [serach, setSearch] = useState("");
  
  return (
    <div className="md:w-2/5 px-2 md:px-2 w-full h-full border-r-[1px] border-zinc-800">
      <div className="flex nav  py-5 px-2  items-center justify-between">
        <h1 className="font-bold md:text-3xl text-2xl text-white ">
          TO DO LIST
        </h1>rgb(0, 0, 0)
        <TabButton className="" />
      </div>
      <div className="serachAndFiletr  gap-2 flex relative">
        <div className="cir rounded-full w-[1.7rem] h-[1.7rem] bg-zinc-950 absolute top-[.2rem] left-[.15rem] text-center flex items-center justify-center">
          <i className="ri-search-line text-white"></i>
        </div>
        <input
          type="text"
          className="w-full bg-zinc-800 p-1 text-white outline-[0] px-9 rounded-xl"
          placeholder="serach your task"
          value={serach}
          onInput={(e) => setSearch(e.target.value)}
        />
        <div
          style={{ transition: "all ease 0.3s" }}
          className="btn hover:opacity-75 cursor-pointer px-3 flex text-white font-semibold items-center justify-center bg-zinc-800 w-[5rem] h-[1.9rem] rounded-lg"
        >
          serach
        </div>
        <div className="btn  flex items-center justify-center bg-white w-[2rem] h-[1.9rem] rounded-full">
          <CgSortAz size={35} />
        </div>
      </div>
      <br />
      <div className="w-full  h-full overflow-scroll">
        {[1,2,3,4,5,2,3,4,5,6,7,8,9].fill().map((e,i)=>(
          <ToDo  key={i}/>
        ))}
      </div>
    </div>
  );
}

export default main;

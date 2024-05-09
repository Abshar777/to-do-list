import { useEffect, useState } from "react";

function tabButton({ border }) {
  const [active, setActive] = useState(false);

  return (
    <div className={`cursor-pointer scale-75 md:scale-100 font-semibold text-white flex relative gap-[1rem] py-1 px-3 ease-in duration-100 transition-all transi items-center justify-between ${border && 'border-[1px]'} bg-zinc-700 border-zinc-400 rounded-md`}>
      <span style={{ transition: 'all ease 0.3s' }} className={`absolute bg-zinc-950 ${active ? 'left-[.05rem] w-[46%] ' : 'left-[3.7rem] w-[56%]'}  top-[] h-[97%] rounded-md z-10`}></span>
      <h1 onClick={() => {console.log('kkeke'); setActive(true) }} className="z-[999]">Done</h1>
      <h1 onClick={() => { setActive(false) }} className="z-[999]">Undone</h1>
    </div>
  );
}

export default tabButton;

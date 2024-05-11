import { useEffect, useState } from "react";

function tabButton({ border,name,classN ,status,none,click}) {
  const [active, setActive] = useState(true);
  useEffect(()=>{
    
    !status?setActive(true):setActive(false)
    return ()=>{}
  },[status])
  return (
    <div  className={`cursor-pointer scale-75 ${classN?'md:'+classN:"md:scale-100"} font-semibold text-white flex relative gap-[1rem] py-1 px-3 ease-in duration-100 transition-all transi items-center justify-between ${border && 'border-[1px]'} bg-zinc-700 border-zinc-400 rounded-md ${classN}`}>
      <span style={{ transition: 'all ease 0.3s' }} className={`absolute bg-zinc-950 ${active ? 'left-[.06rem] w-[45%]  ' : 'left-[3.7rem] w-[55%]'}  top-[] h-[95%] rounded-md z-10`}></span>
      <h1 onClick={() =>{click(active); !none&&setActive(true)} } className="z-[999] capitalize">{name[0]}</h1>
      <h1 onClick={() => {click(active); !none&&setActive(false) }} className="z-[999] capitaliz">{name[1]}</h1>
    </div>
  );
}

export default tabButton;

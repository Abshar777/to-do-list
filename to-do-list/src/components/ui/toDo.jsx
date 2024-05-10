import { useEffect, useState } from "react";
import Badge from "./badge";
function ToDo({name,des,date,status,edited,active}) {
    const [hover,setHover]=useState(false);
    const hasMore=des&&des.split(' ').length>20;
    
    useEffect(()=>{
        active?setHover(true):setHover(false)
        return ()=>{}
    },[active])
    return (
        <div onMouseEnter={()=>setHover(true)} onMouseLeave={()=>!active&&setHover(false)} style={{ transition: 'all ease 0.3s' }} className={`mb-2 py-1 px-4 flex flex-col gap-2  w-[98%] text-white  min-h-[5rem] rounded-md  bg-zinc-800 ${active&&"bg-zinc-900"} hover:bg-zinc-900`}>
            <div className="head w-full flex justify-between">
                <h1 className="capitalize font-semibold text-lg">{name}</h1>
                <div className="flex items-center justify-center gap-2">
                    {status&&
                    <i className="ri-check-double-line"></i>
                    }
                    <h1 className="text-zinc-400 text-[.8rem] font-medium">{date}</h1>
                </div>
                
            </div>
            <div className="body h-[50%] overflow-hidden">
                   <p className="text-zinc-400 text-sm ">{des&&des?.split(' ').slice(0,18).join(' ')} {hasMore&&'...'}</p> 
                </div>
                <footer className="w-full mb-2 flex gap-2">
                    {edited&&<Badge name={"edited"} white={false} border={hover} />}
                    <Badge name={status?"done":"undone"} white={false} border={hover} />
                </footer>
        </div>
    )
}

export default ToDo

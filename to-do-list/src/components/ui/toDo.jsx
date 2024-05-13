import { useEffect, useState } from "react";
import Badge from "./badge";
import { Reorder, useMotionValue } from "framer-motion";
import { useRaisedShadow } from "./onRaisedShadow";
function ToDo({name,des,date,status,edited,active,click,i,item,showClick}) {
    const [hover,setHover]=useState(false);
    const hasMore=item.des&&item.des.split(' ').length>20;
    const y = useMotionValue(0);
    const boxShadow = useRaisedShadow(y);
    useEffect(()=>{
        active?setHover(true):setHover(false)
        return ()=>{}
    },[active])
    return (
        <Reorder.Item id={i} style={{ boxShadow, y }} value={item} onClick={()=>{click(i); showClick()}} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>!active&&setHover(false)}  className={`mb-2 py-1 px-4 flex flex-col gap-2  w-[98%] text-white  min-h-[5rem] rounded-md  bg-zinc-800 ${active&&"bg-zinc-900"} hover:bg-zinc-900`}>
            <div className="head w-full flex justify-between">
                <h1 className="capitalize font-semibold text-lg">{item.name}</h1>
                <div className="flex items-center justify-center gap-2">
                    {item.status==true&&
                    <i className="ri-check-double-line"></i>
                    }
                    <h1 className="text-zinc-400 text-[.8rem] font-medium">{item.date}</h1>
                </div>
                
            </div>
            <div className="body h-[50%] overflow-hidden">
                   <p className="text-zinc-400 text-sm ">{item.des&&item.des?.split(' ').slice(0,18).join(' ')} {hasMore&&'...'}</p> 
                </div>
                <footer className="w-full mb-2 flex gap-2">
                    {item.edited&&<Badge name={"edited"} white={false} border={hover} />}
                    <Badge name={item.status?"done":"undone"} white={false} border={hover} />
                </footer>
        </Reorder.Item>
    )
}

export default ToDo

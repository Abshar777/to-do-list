import React, { useState } from 'react'
import TabButton from './ui/tab-button'
import Sheet from './ui/sheet'
import Alerts from './ui/alerts'
import { toast } from 'sonner';

function TeskDetails({ name, des,id, date, status, edited, active, selectedTodo,editFn,dlt,complete ,overlay,show,showClick}) {
    const [edit, setEdit] = useState(false);
    const [remove, setRemove] = useState(false)
    return (
        <>
            <Alerts dlt={dlt} id={id} active={remove} setActive={setRemove} />
            <div onClick={(e) => !e.target.className.includes('sheet') && edit && setEdit(false)} className='w-full relative h-full flex flex-col px-2'>

                <div className="flex nav  py-5 px-2  items-center justify-between">
                <i onClick={()=>{show()}} className="ri-menu-2-line block md:hidden cursor-pointer text-white"></i>
                    <h1 className="font-bold md:text-2xl text-xl uppercase text-zinc-100 ">
                        Task Detail
                    </h1>
                    < i className="ri-inbox-2-line  text-zinc-400 text-xl"></i>
                </div>
                {selectedTodo ? <> 
                <div className="flex w-full nav border-b-[1px] border-zinc-800  py-2  md:px-4  items-center justify-between">
                <i onClick={showClick} class="ri-arrow-drop-left-line md:hidden block text-white cursor-pointer"></i>
                    <h1 className="font-bold md:text-xl text-md capitalize text-zinc-100 ">
                        {name}
                    </h1>
                    <TabButton none={true} classN="scale-75" status={status} name={["done", "undone"]} />
                </div>
                    <div className="body  w-full h-full overflow-scroll md:px-6 px-3 py-5">
                        <h1 className='text-zinc-100  font-medium text-md'>Description : <span className='text-md'>{des}</span> </h1>
                        <h1 className='flex gap-3 py-4 text-zinc-100 font-medium text-md'>DATE <p className='text-md'>{date}</p> </h1>

                    </div>
                    <footer className='absolute px-4 w-full justify-center flex gap-4 bottom-[5%]'>

                        <div onClick={() => setEdit(true)} style={{ transition: "all ease 0.3s" }} className="btn hover:opacity-75 cursor-pointer px-3 flex text-white font-semibold items-center justify-center bg-zinc-800 w-[5rem] h-[1.9rem] rounded-lg">
                            Edit
                        </div>
                        <Sheet  edit={editFn} name={name} id={id} des={des} setActive={setEdit} active={edit} />

                        <div onClick={()=>{ !status?toast.success('task is completed'):toast.warning('task is note complete'); complete(id)}} style={{ transition: "all ease 0.3s" }} className="btn hover:opacity-75 cursor-pointer px-3 flex text-black font-semibold active:scale-[.8] items-center justify-center bg-zinc-200 min-w-[5rem] h-[1.9rem] rounded-lg">
                            {!status?'Completed':'NotCompleted'}
                        </div>
                        <div onClick={() => {setRemove(true)}} style={{ transition: "all ease 0.3s" }} className="btn hover:opacity-75 cursor-pointer px-3 flex text-white font-semibold items-center justify-center bg-zinc-800 w-[5rem] h-[1.9rem] rounded-lg">
                            Remove
                        </div>
                    </footer></> : <div className="w-full h-[80%] flex flex-col gap-2 text-center justify-center items-center">
                    <h1 className="font-bold text-zinc-400  text-2xl capitalize">no task is selected</h1>
                    
                  
                </div>}
            </div>
        </>
    )
}

export default TeskDetails

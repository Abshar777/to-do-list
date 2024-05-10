import React, { useState } from 'react'
import date from '@/util/formatDate'
import { toast } from 'sonner';
import { v4 as uuidv4 } from 'uuid';

function addTask({setTodo,selectedTodo,inputRef,todo}) {
    let [name,setName]=useState('')
    let [des,setDes]=useState('')
    
    const formSubmit=()=>{
        if(name.trim()!=='' && des.trim()!==''){
            let newTask={
                id:uuidv4(),
                name:name,
                des:des,
                status:false,
                date:date(),
                edited:false
            }
            setTodo(prev => {
                todo.length==0?prev=[]:prev
                const updatedTodo = [...prev, newTask];
                localStorage.setItem("todo", JSON.stringify(updatedTodo));
                return updatedTodo;
              })
            setName('');
            setDes('');
            newTask={};
            toast.success('Event has been created')

        }else{
            toast.error('the input field note empty')
        }
    }
    return (
        <div  className='w-full relative h-full flex flex-col px-2'>
            <div className="flex nav  py-5 px-2  items-center justify-between">
                <h1 className="font-bold md:text-2xl text-2xl uppercase text-zinc-100 ">
                    Add task
                </h1>
                < i className="ri-inbox-2-line text-zinc-400 text-xl"></i>
            </div>
            <div className="formGroup py-3 px-3 flex flex-col gap-2">
                <label className="font-semibold  md:text-lg text-lg text-white " htmlFor="name">name</label>
                <input ref={inputRef} type="text" placeholder='plaese fill the name' onChange={(e)=>setName(e.target.value)} value={name} name='name' className=' bg-zinc-800 h-[2rem] text-white px-3 py-1 outline-0  rounded-lg ' />
            </div>
            <div className="formGroup py-3 px-3 flex flex-col gap-2">
                <label className="font-semibold  md:text-lg text-lg text-white " htmlFor="name">description</label>
                <textarea type="text" placeholder='plaese fill the name' cols={40} // Number of columns
      rows={6}  onChange={(e)=>setDes(e.target.value)} value={des} name='name' className=' bg-zinc-800  text-white px-3 py-1 outline-0  rounded-lg ' />
            </div>
            <div className="w-full flex justify-end">
       <div onClick={()=>formSubmit()}  style={{ transition: "all ease 0.3s" }} className="btn hover:opacity-75 cursor-pointer px-3 flex text-white font-semibold items-center justify-center bg-zinc-800 w-[5rem] h-[1.9rem] rounded-lg">
        Add
        </div>
       </div>
        </div>
    )
}

export default addTask

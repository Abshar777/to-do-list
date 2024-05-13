import React, { useState } from 'react'
import { toast } from 'sonner';
function Sheet({ active, setActive, name, des, id, edit }) {
  const [Name, setName] = useState(name)
  const [Des, setdes] = useState(des);
  const formSubmit = () => {
    if(Name.trim()!=='' && Des.trim()!==''){
      setActive(false)
      const newTask={
        id:id,
        name:Name,
        des:Des
      }
      edit(newTask);
      toast.success('succes fully edited')
    }else{
      toast.error('the input field note empty')
    }
  }
  return (
    <div style={{ transition: 'all ease 0.5s' }} className={` sheet absolute text-white md:w-full w-[95%] md:me-0 me-4  h-[50vh] ${active ? "bottom-[-3rem] scale-[1]" : "bottom-[-28rem] "}  bg-zinc-900 border-zinc-500 border-[1px] rounded-t-lg `}>
      <div className=" sheet head flex border-zinc-500  w-full px-2 py-3 justify-between">
        <h1 className="font-bold sheet capitalize md:text-2xl text-xl text-white ">
          edit {name}
        </h1>
        <i style={{ transition: 'all ease-out 1s' }} onClick={() => { setActive(false); setName(name); setdes(des) }} className={` ${active ? 'rotate-0' : 'rotate-180'} ri-close-large-line sheet text-white text-2xl cursor-pointer`}></i>
      </div>
      <div className="body overflow-scroll h-[80%] sheet px-4 py-3 flex flex-col gap-2">
        <div className="formGroup sheet flex flex-col gap-2">
          <label className="font-semibold sheet  md:text-lg text-lg text-white " htmlFor="name">name</label>
          <input type="text" placeholder='plaese fill the name' onChange={e => setName(e.target.value)} value={Name} className=' sheet bg-zinc-800 text-white px-3 py-1 outline-0  rounded-lg ' />
        </div>
        <div className="formGroup sheet flex flex-col gap-2">
          <label className="font-semibold sheet  md:text-lg text-lg text-white " htmlFor="name">description</label>
          <textarea type="text" placeholder='plaese fill the name' onChange={e => setdes(e.target.value)} value={Des} className=' sheet bg-zinc-800 text-white px-3 py-1 outline-0  rounded-lg ' />
        </div>
        <div className="w-full flex justify-end">
          <div onClick={() => formSubmit()} style={{ transition: "all ease 0.3s" }} className="btn sheet hover:opacity-75 cursor-pointer px-3 flex text-white font-semibold items-center justify-center bg-zinc-800 w-[5rem] h-[1.9rem] rounded-lg">
            Save
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sheet

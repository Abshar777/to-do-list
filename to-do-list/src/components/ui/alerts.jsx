import React from 'react'
function Alerts({active,setActive,dlt,id}) {
  return (
    <div style={{transition:'all ease 0.3s'}} className={`w-full h-full absolute  ${!active?'z-[-10] opacity-0':'z-[50] opacity-100'} left-0  transition-all ease duration-75 flex items-center justify-center bg-[#000000c7] backdrop-blur-sm`}>
      
      <div style={{transition:'all ease 0.5s'}} className={`${active?'scale-[1]':'scale-[.8] '} relative transform overflow-hidden rounded-lg bg-zinc-950 border-[.6px] border-zinc-700 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg`}>
        <div className="bg-zinc-950 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-400 sm:mx-0 sm:h-10 sm:w-10">
              <svg className="h-6 w-6 text-red-900" fill="none" viewBox="0 0 24 24"  stroke="currentColor" aria-hidden="true">
                <path  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
            </div>
            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
              <h3 className="text-base font-semibold leading-6 text-white" id="modal-title">Remove This Task</h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">Are you sure you want to remove this task ? this data will be permanently removed. This action cannot be undone.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-zinc-950 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button onClick={()=>{setActive(false); dlt(id)}} type="button" className="inline-flex w-full outline-0 active:scale-[.9] transition-all ease duration-75 justify-center rounded-md bg-red-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-800 sm:ml-3 sm:w-auto">Remove</button>
          <button onClick={()=>setActive(false)} type="button" className="mt-3 inline-flex w-full outline-0 justify-center active:scale-[.9] transition-all ease duration-75 rounded-md bg-zinc-800 px-3 py-2 text-sm font-semibold text-gray-100  hover:bg-zinc-700 sm:mt-0 sm:w-auto">Cancel</button>
        </div>
      </div>
 
    </div>
  )
}

export default Alerts

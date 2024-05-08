import React from 'react'

function tabButton({border,active}) {
  return (
    <div className={`cursor-pointer flex  p-2 hover:bg-zinc-800 ease-in duration-100 transition-all transi items-center justify-between ${border&&'border-[1px]'} ${active&&'bg-zinc-800'} border-zinc-800 rounded-md`}>
      
    </div>
  )
}

export default tabButton

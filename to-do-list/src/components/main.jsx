import React from 'react'
import TabButton from './ui/tab-button'
function main() {
  return (
    <div className='md:w-2/5 w-full h-full border-r-[1px] border-zinc-800'>
     <div className="flex nav  py-5 px-4 items-center justify-between">
      <h1 className='font-bold text-3xl text-white '>TO DO LIST</h1>
      <TabButton/>
      </div>   

    </div>
  )
}

export default main

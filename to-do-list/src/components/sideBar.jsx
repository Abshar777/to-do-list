import React from 'react'
import Button from './ui/button'
function sideBar() {
  return (
    <div className='w-2/12 h-full p-4  hidden md:flex flex-col border-r-[1px] border-zinc-800'>
    <Button icon={'ri-triangle-fill'} secIcon={"ri-expand-up-down-line"} name={'Abshar'}/>
    </div>
  )
}

export default sideBar

import { RiExpandUpDownFill, RiExpandUpDownLine, RiTriangleFill } from '@remixicon/react'
import React from 'react'
import 'remixicon/fonts/remixicon.css'
function button({ icon, name, secIcon }) {
    return (
        <div className='flex w-full p-2 hover:bg-zinc-800 ease-in duration-150 transition-all transi items-center justify-between border-[1px] border-zinc-800 rounded-md'>
            <div className="icon flex gap-3 h-100 ">
            <i class={`${icon} text-zinc-100`}></i>
                <p className='text-white font-semibold capitalize'>{name}</p>
            </div>
            <i class={`${secIcon} text-zinc-400`}></i>
        </div>
    )
}

export default button

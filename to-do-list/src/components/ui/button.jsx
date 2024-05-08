import { RiExpandUpDownFill, RiExpandUpDownLine, RiTriangleFill } from '@remixicon/react'
import React from 'react'
import 'remixicon/fonts/remixicon.css'
function button({ icon, name, secIcon,border,count,active }) {
    return (
        <div className={`cursor-pointer flex w-full p-2 hover:bg-zinc-800 ease-in duration-100 transition-all transi items-center justify-between ${border&&'border-[1px]'} ${active&&'bg-zinc-800'} border-zinc-800 rounded-md`}>
            <div className="icon flex gap-3 h-100 ">
            <i className={`${icon} text-zinc-100`}></i>
                <p className='text-white font-semibold capitalize'>{name}</p>
            </div>
            <i className={`${secIcon} lg:block hidden text-zinc-400`}></i>
            {count&&<p  className={`text-white lg:block hidden font-semibold capitalize`}>{count}</p>}

        </div>
    )
}

export default button

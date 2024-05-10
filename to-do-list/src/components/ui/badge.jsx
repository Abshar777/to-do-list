import React from 'react'

function Badge({name,white,border}) {
  return (
    <div style={{ transition: 'all ease 0.3s',border: '.5px solid #18181B',...(border&&{border: '.5px solid #27272A'}) } } className={`px-5 text-sm font-medium text-[.6rem] border-zinc-900 outline-zinc-400 capitalize  py-[2px] ${white?"bg-zinc-200 text-black":'bg-zinc-900 text-white'} min-w-[1rem]   text-center rounded-3xl`}>
      <h1>{name}</h1>
    </div>
  )
}

export default Badge

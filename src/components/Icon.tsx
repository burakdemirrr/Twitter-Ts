import React from 'react'

type Props={
    Icon:(props:React.ComponentProps<'svg'>)=>JSX.Element,
    title:string
}


const Icon:React.FC<Props> = ({Icon,title}) => {
  return (
    <div className='flex items-center gap-4 cursor-pointer hover:bg-[#E7E7E8] max-w-fit p-[0.4rem] pl-3 pr-8 rounded-full my-4'>
        <Icon className='w-8 text-[#0F1419]'/>
        <p className='text-xl'>{title}</p>
    </div>
  )
}

export default Icon
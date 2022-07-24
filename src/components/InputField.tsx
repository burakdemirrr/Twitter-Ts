import React from 'react'
import { SparklesIcon,PhotographIcon,GiftIcon,MenuAlt1Icon,EmojiHappyIcon,CalendarIcon,LocationMarkerIcon} from '@heroicons/react/outline'
import { useAppSelector } from '../redux/hooks';

const InputField = () => {
  const user=useAppSelector((state)=>state.user.user);

  return (
    <div className='flex flex-col w-full '>
        <div className='flex justify-between items-center'>
            <p className='font-bold text-xl'>Anasayfa</p>
            <SparklesIcon className='w-6 h-6'/>
        </div>
        <div className='flex  mt-4 '>
            <img className='w-12 h-12  rounded-full' src={user.photoURL} alt="" />
            <input className="flex-1 w-24 h-12 outline-none ml-3 text-xl  placeholder:text-slate-500" type="text" placeholder='Neler oluyor?' />
        </div>
  
        <div className='flex space-x-2 items-center justify-between'>
          <div className='flex space-x-2 items-center'>
          <PhotographIcon className='w-6 h-6 text-blue-400'/>
          <GiftIcon className='w-6 h-6 text-blue-400'/>
          <MenuAlt1Icon className='w-6 h-6 text-blue-400'/>
          <EmojiHappyIcon className='w-6 h-6 text-blue-400'/>
          <CalendarIcon className='w-6 h-6 text-blue-400'/>
          <LocationMarkerIcon className='w-6 h-6 text-blue-200'/>
          </div>

          <div>
            <button className='flex w-24 text-white  h-10 rounded-full bg-[#31a4f0] font-bold items-center justify-center'>Tweetle</button>
          </div>
        </div>
    </div>
  )
}

export default InputField
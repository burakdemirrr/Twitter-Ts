import React, { useState } from 'react'
import { SparklesIcon,PhotographIcon,GiftIcon,MenuAlt1Icon,EmojiHappyIcon,CalendarIcon,LocationMarkerIcon} from '@heroicons/react/outline'
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { addTweet } from '../redux/gonder';

const InputField = () => {
  const [tweet,setTweet]=useState<string>("");
  const user=useAppSelector((state)=>state.user.user);
  const dispatch=useAppDispatch();

  const sendTweet = async(e:any)=> {
    e.preventDefault();
    setTweet('');
    dispatch(addTweet({
      tweet:tweet,
      name:user.name,
      userImg:user.photoURL,
      timestamp:new Date(),
      id:Math.random().toString(36).slice(2),
    }))
  }
 

  return (
    <div className='flex flex-col w-full  border-b border-gray-200 py-2 px-4'>
        <div className='flex justify-between items-center'>
            <p className='font-bold text-xl'>Anasayfa</p>
            <SparklesIcon className='w-6 h-6'/>
        </div>
        <div className='flex  mt-4 '>
            <img className='w-12 h-12  rounded-full' src={user?.photoURL} alt="" />
            <input value={tweet} onChange={(e)=>setTweet(e.target.value)} className="flex-1 w-24 h-12 outline-none ml-3 text-xl  placeholder:text-slate-500" type="text" placeholder='Neler oluyor?' />
        </div>
  
        <div className='flex space-x-2 items-center justify-between mt-3'>
          <div className='flex space-x-3 items-center ml-12'>
          <PhotographIcon className='w-6 h-6 cursor-pointer text-blue-400'/>
          <GiftIcon className='w-6 h-6 cursor-pointer text-blue-400'/>
          <MenuAlt1Icon className='w-6 h-6 cursor-pointer text-blue-400'/>
          <EmojiHappyIcon className='w-6 h-6 cursor-pointer text-blue-400'/>
          <CalendarIcon className='w-6 h-6 cursor-pointer text-blue-400'/>
          <LocationMarkerIcon className='w-6 h-6 cursor-pointer text-blue-200'/>
          </div>

          <div>
            <button onClick={sendTweet} className='flex w-24 text-white  h-10 rounded-full bg-[#31a4f0] font-bold items-center justify-center hover:bg-blue-700'>Tweetle</button>
          </div>
        </div>
    </div>
  )
}

export default InputField
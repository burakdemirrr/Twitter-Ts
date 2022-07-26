import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../redux/hooks';
import { ChatIcon,SwitchVerticalIcon,HeartIcon} from '@heroicons/react/outline';

const Post = () => {
  const twitler=useAppSelector(state=>state.tweet.init);

  return (
      <div>
        {
          twitler.map((item)=>(
            <div key={item.id} className="flex flex-col text-left  p-5 ">
                <div className='flex items-center'>
                  <img className='w-12 rounded-full' src={item.userImg} alt="" />
                  <div className='ml-2'>
                    <p>{item.name}</p>
                    <p className='text-sm text-gray-500'>@{item.name}</p>
                  </div>
                </div>

              <p className='mt-3'>{item.tweet}</p>

              <div className='flex items-center justify-between  p-3 px-1'>
                <ChatIcon className='w-5 cursor-pointer text-gray-600 hover:text-blue-400'/>
                <SwitchVerticalIcon className='w-5 cursor-pointer text-gray-600 hover:text-green-600'/>
                <HeartIcon className='w-5 cursor-pointer text-gray-600 hover:text-red-600'/>
              </div>
              
            </div>
          ))
        }
      </div>
  )
}

export default Post
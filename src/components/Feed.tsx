import React from 'react'
import { useAppSelector } from '../redux/hooks'
import InputField from './InputField'
import Post from './Post'
const Feed = () => {
  return (
    <div className='flex flex-col flex-1 min-h-screen border-x border-gray-100 p-4 px-0 '>
        <InputField/>
        <Post/>
    </div>
  )
}

export default Feed
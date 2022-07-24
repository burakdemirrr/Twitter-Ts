import React from 'react'
import { useAppSelector } from '../redux/hooks'
import InputField from './InputField'

const Feed = () => {
  return (
    <div className='flex flex-1 min-h-screen border-x border-gray-100 p-4 '>
        <InputField/>
    </div>
  )
}

export default Feed
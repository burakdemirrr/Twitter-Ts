import React from 'react'
import Feed from '../components/Feed';
import Sidebar from '../components/Sidebar';
import Suggestions from '../components/Suggestions';
import { useAppSelector } from '../redux/hooks'

const Home = () => {
  const user=useAppSelector(state=>state.user.user);
  return (
    <div className='flex justify-between px-36 relative'>
      <Sidebar/>
      <Feed />
      <Suggestions/>
    </div>
  )
}

export default Home
import React from 'react'
import Sidebar from '../components/Sidebar';
import { useAppSelector } from '../redux/hooks'

const Home = () => {
  const user=useAppSelector(state=>state.user.user);
  return (
    <div>
      <Sidebar/>


    </div>
  )
}

export default Home
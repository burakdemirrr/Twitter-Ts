import React from 'react'
import Icon from './Icon'
import { HomeIcon,HashtagIcon,BellIcon,MailOpenIcon,BookmarkIcon,ClipboardIcon,UserIcon,DotsHorizontalIcon } from '@heroicons/react/outline'

const Sidebar = () => {
  return (
    <div className='flex flex-col '>
        <img className='w-8 ml-3 mt-2' src="https://www.iics.k12.tr/wp-content/uploads/2019/07/twitter-logo-png-twitter-logo.png" alt="" />
        <ul>
          <Icon Icon={HomeIcon} title="Anasayfa"/>
          <Icon Icon={HashtagIcon} title="Keşfet"/>
          <Icon Icon={BellIcon} title="Bildirimler"/>
          <Icon Icon={MailOpenIcon} title="Mesajlar"/>
          <Icon Icon={BookmarkIcon} title="Kaydedilenler"/>
          <Icon Icon={ClipboardIcon} title="Listeler"/>
          <Icon Icon={UserIcon} title="Profil"/>
          <Icon Icon={DotsHorizontalIcon} title="Daha fazla"/>
        </ul>
        <button className='flex w-56 text-white text-[1.1rem] h-14 rounded-full bg-[#31a4f0] font-bold items-center justify-center'>Tweetle</button>
    </div>
  )
}

export default Sidebar
import React from 'react'
import { SearchIcon } from '@heroicons/react/outline'
import { TwitterTimelineEmbed } from 'react-twitter-embed'
const Suggestions = () => {
  return (
    <div className='flex px-8 py-1 flex-col '>
      <div className='flex h-11 w-[21rem] p-3 items-center bg-[#EFF3F4] rounded-full'>
        <SearchIcon className='w-6 h-5 text-gray-600'/>
        <input className='bg-transparent outline-0 pl-3   placeholder:text-gray-600 ' type="text" placeholder="Twitter'da Ara "/>
      </div>

      <div>
        <TwitterTimelineEmbed
        sourceType="profile"
        screenName="burakdeniro"
        options={{height: 700}}
        />
      </div>

    </div>
  )
}

export default Suggestions
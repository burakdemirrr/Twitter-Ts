import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../redux/hooks';

const Post = () => {
  const twitler=useAppSelector(state=>state.tweet.init);

  return (
      <div>
        {
          twitler.map((item)=>(
            <div key={item.id}>
              <h1>{item.tweet}</h1>
            </div>
          ))
        }
      </div>
  )
}

export default Post
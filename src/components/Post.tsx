import { query } from 'express';
import { collection, onSnapshot, orderBy } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../firebase/firebase';

const Post = () => {
    const [tweet,setTweets]=useState<string[]>([]);

    
  return (
    <div>Post</div>
  )
}

export default Post
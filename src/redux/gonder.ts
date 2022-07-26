import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
export interface Tweet {
  tweet?: string |null,
  name?: string |null,
  userImg?: any |null,
  timestamp?: Date |null,
  id?: string |null,
}

const init:Tweet[]=[];


export const tweetSlice = createSlice({
  name: 'tweet',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState:{
    init
  },
  reducers: {
    addTweet: (state, action: PayloadAction<Tweet>) => {
        state.init.push(action.payload);
    }

  },
})

export const {addTweet} = tweetSlice.actions

// Other code such as selectors can use the imported `RootState` type

export default tweetSlice.reducer
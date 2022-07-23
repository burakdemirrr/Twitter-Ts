import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface User {
  email: number,
  id: number,
  name: string,
  photoURL: string,
}

// Define the initial state using that type
const user: User | any = null;

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState:{
    user
  },
  reducers: {
    login:(state,action: PayloadAction<User>) => {
        state.user = action.payload
    },
    logout:(state)=>{
        state.user=null;
    }
   
  },
})

export const { login,logout} = userSlice.actions

// Other code such as selectors can use the imported `RootState` type

export default userSlice.reducer
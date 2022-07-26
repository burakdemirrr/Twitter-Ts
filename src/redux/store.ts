import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./slice"
import tweetReducer from "./gonder"

export const store = configureStore({
  reducer: {
    user:userReducer,
    tweet:tweetReducer
  },

})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
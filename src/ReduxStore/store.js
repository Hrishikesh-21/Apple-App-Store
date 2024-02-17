import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from '../ReduxStore/Counter'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
})
import { configureStore } from '@reduxjs/toolkit'
import addreducer from '../Slices/TodoSlice'
import editreducer from'../Slices/TodoSlice'
export const store = configureStore({
  reducer: {
    addtext:addreducer,
    // editedtext:editreducer
  },
})
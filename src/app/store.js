import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import dataAryReducer from '../features/counter/dataSlice'
import titleReducer from '../features/counter/titleSlice'
export default configureStore({
  reducer: {
    counter: counterReducer,
    dataAry:dataAryReducer,
    title:titleReducer
  },
})
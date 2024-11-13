import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../slice/Todoslice'

const store = configureStore({
  reducer:{
    items:todoReducer,
  },
})

export default store
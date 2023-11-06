import { configureStore } from '@reduxjs/toolkit'
import {apiSlice} from './slices/apiSlice.js'

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  devtools: true, // process.env.NODE_ENV !== 'production',
})

export default store

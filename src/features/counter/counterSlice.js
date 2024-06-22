import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: null,
  },
  reducers: {
   
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },

    inputData: (state, action) => {
        state.value = action.payload
      },
  },
})


export const { incrementByAmount, inputData } = counterSlice.actions

export default counterSlice.reducer
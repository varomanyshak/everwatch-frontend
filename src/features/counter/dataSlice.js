import { createSlice } from '@reduxjs/toolkit'

export const dataSlice = createSlice({
  name: 'dataAry',
  initialState: {
    value: [],
  },
  reducers: {
    dataIncrement: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { dataIncrement } = dataSlice.actions

export default dataSlice.reducer
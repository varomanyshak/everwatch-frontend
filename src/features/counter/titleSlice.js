import { createSlice } from '@reduxjs/toolkit'

export const titleSlice = createSlice({
  name: 'title',
  initialState: {
    value: "ASN Inoformation",
  },
  reducers: {
    inputTitle: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { inputTitle } = titleSlice.actions

export default titleSlice.reducer
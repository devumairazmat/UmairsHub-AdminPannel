import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    
  },
})

// Action creators are generated for each case reducer function
export const {  } = adminSlice.actions

export default adminSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  current: "/",
  prev: null
}

export const pathReducer = createSlice({
  name: 'path',
  initialState,
  reducers: {
    getPage: (state) => {
      return state
    },
    setPath: (state, action) => {
      state.prev = state.current
      state.current = action.payload.current
      return state
    }
  },
})

// Action creators are generated for each case reducer function
export const { getPage, setPath } = pathReducer.actions

export default pathReducer.reducer


import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: null,
  userId: null,
  name: null,
  email: null,
  role: null,
  avatar: null
}

export const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUser: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    registerUser: (state) => {
      state.value -= 1
    },
    logoutUser: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { loginUser, registerUser, logoutUser } = authReducer.actions

export default authReducer.reducer
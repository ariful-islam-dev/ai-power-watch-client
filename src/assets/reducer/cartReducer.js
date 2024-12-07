import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
}

export const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addToCart: (state, action) => {
        state.cart.push(action.payload)
      
    }
  },
})

// Action creators are generated for each case reducer function
export const { loginUser, registerUser, logoutUser } = authReducer.actions

export default authReducer.reducer
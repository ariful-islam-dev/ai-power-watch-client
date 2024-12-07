import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const dataReducer = createSlice({
  name: "data",
  initialState,
  reducers: {
    getData: (state) => {
      return state.data;
    },
    addData: (state, action) => {
      state.data = action.payload;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addData } = dataReducer.actions;

export default dataReducer.reducer;

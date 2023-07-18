import { createSlice } from "@reduxjs/toolkit";

export const currentTaskSlice = createSlice({
  name: "currentTask",
  initialState: {
    currentTaskValue: "",
    currentTime: "5:49PM",
  },
  reducers: {
    setCurrentTask: (state, action) => {
      state.currentTaskValue = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCurrentTask } = currentTaskSlice.actions;

export default currentTaskSlice.reducer;

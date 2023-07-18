import { createSlice } from "@reduxjs/toolkit";

export const paginatorSlice = createSlice({
  name: "paginator",
  initialState: {
    currentPage: 1,
  },
  reducers: {
    updateCurrentPage: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      state.currentPage = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateCurrentPage } = paginatorSlice.actions;

export default paginatorSlice.reducer;

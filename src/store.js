import { configureStore } from "@reduxjs/toolkit";
import paginatorReducer from "./redux/paginatorSlice";
import currentTaskReducer from "./redux/currentTaskSlice";

export default configureStore({
  reducer: {
    paginator: paginatorReducer,
    currentTask: currentTaskReducer,
  },
});

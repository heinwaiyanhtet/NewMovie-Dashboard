import { configureStore } from "@reduxjs/toolkit";
import contentTitleSlice from "./contentTitle-slice";

const store = configureStore({
  reducer: {
     contentSlice:contentTitleSlice.reducer,          
  },
});

export default store;

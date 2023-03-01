import { configureStore } from "@reduxjs/toolkit";
import {  TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import contentTitleSlice from "./contentTitle-slice";

const store  = configureStore({
  reducer: {
     contentSlice:contentTitleSlice.reducer,          
  },
});

export default store;

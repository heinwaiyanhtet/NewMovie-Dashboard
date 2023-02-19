import { configureStore } from "@reduxjs/toolkit";
import routeSlice from "./route-slice";

const store = configureStore({
  reducer: {
     routeSlice:routeSlice.reducer,
  },
});

export default store;

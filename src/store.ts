import { configureStore } from "@reduxjs/toolkit";
import filterColorReducer from "./Reducers/filterColorReducer";

export const store = configureStore({
  reducer: {
    filterColor: filterColorReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

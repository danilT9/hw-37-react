import { configureStore } from "@reduxjs/toolkit";
import slicer from "./slice.js";

export const store = configureStore({
  reducer: {
    contacts: slicer
  }
})
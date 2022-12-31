import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "./slices";
const store = configureStore({
  reducer: {
    recipeReducer,
  },
});

export default store;

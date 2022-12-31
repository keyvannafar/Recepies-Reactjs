import { createSlice } from "@reduxjs/toolkit";

const recipeSlice = createSlice({
  name: "recipe",
  initialState: {
    recipeList: [],
  },
  reducers: {
    getRecipeList: (state) => {
      state = [];
    },
  },
});
export const { getRecipeList } = recipeSlice.actions;
export default recipeSlice.reducer;

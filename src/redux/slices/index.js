import { createSlice } from "@reduxjs/toolkit";


const recipeSlice = createSlice({
  name: "recipe",
  initialState: {
    recipeList: [],
    test: "",
  },
  reducers: {
    getNewRecipes: (state, actions) => {
      state.recipeList = actions.payload;
    },
    searchByName: (state, actions) => {
      state.recipeList = actions.payload;
    },

    test_: (state) => {
      console.log("xxxxxxxxxxxxxxxxxx");
      state.test = "salam";
    },
  },
});
export const { getNewRecipes, searchByName } = recipeSlice.actions;
export default recipeSlice.reducer;



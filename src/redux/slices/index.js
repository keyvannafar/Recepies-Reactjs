import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiKey, api } from "../../api";

const { path, option, parametes } = api.getNewRecipes;

const recipeSlice = createSlice({
  name: "recipe",
  initialState: {
    recipeList: [],
  },
  reducers: {
    getRecipeList: async (state) => {
      try {
        const res = await axios(path + parametes, option);
        state.recipeList = res.data.recipes;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
export const { getRecipeList } = recipeSlice.actions;
export default recipeSlice.reducer;

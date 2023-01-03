import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { api } from "../../api";

const { path, option, parameters } = api.getNewRecipes;

const recipeSlice = createSlice({
  name: "recipe",
  initialState: {
    recipeList: [],
    test: "",
  },
  reducers: {
    getNewRecipes: (state) => {
      // try {
      //   const res = await axios(path + parameters.apiKey, option);
      //   state.recipeList = res.data.recipes;
      // } catch (error) {
      //   console.log(error);
      // }
      axios(path + parameters.apiKey, option)
        .then((res) => (state.recipeList = res.data.recipes))
        .catch((err) => console.error(err));
    },

    test_: (state) => {
      console.log("xxxxxxxxxxxxxxxxxx");
      state.test = "salam";
    },
  },
});
export const { getNewRecipes, test_ } = recipeSlice.actions;
export default recipeSlice.reducer;

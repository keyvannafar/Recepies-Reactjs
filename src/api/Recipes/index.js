import axios from "axios";
import { api } from "../index";
import { getNewRecipes, searchByName } from "../../redux/slices";

const { path, option, parameters } = api.getNewRecipes;

export const getNewRecipeApi = () => async (dispatch) => {
  try {
    const res = await axios(path + parameters.apiKey, option);
    dispatch(getNewRecipes(res.data.recipes));
  } catch (error) {
    console.log(error);
  }
};

export const searchByNameApi = (search) => async (dispatch) => {
  const params = "&query=" + search.name + "&number=" + search.number;
  console.log(params);
  try {
    const res = await axios(
      api.getRecipesByName.path + parameters.apiKey + params,
      option
    );
    console.log(res.data.results);
    dispatch(searchByName(res.data.results));
  } catch (error) {
    console.log(error);
  }
};
// api.getRecipesByName.path + parameters.apiKey + params, option;

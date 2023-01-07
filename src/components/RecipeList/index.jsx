import axios from "axios";
import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import { getNewRecipeApi} from "../../api/Recipes";
import { useDispatch, useSelector } from "react-redux";

function RecipeList() {
  const recipeList = useSelector((state) => state.recipeReducer.recipeList);
  const recipeDispatch = useDispatch();

  useEffect(() => {
    recipeDispatch(getNewRecipeApi());
  }, [recipeDispatch]);

  return (
    <div class="row row-cols-1 row-cols-md-3  row-cols-lg-4 g-4">
      
      {recipeList.map((item) => (
        <RecipeCard key={item.id} {...item} />
      ))}
    </div>
  );
}

export default RecipeList;

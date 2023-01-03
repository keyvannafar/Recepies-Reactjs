import axios from "axios";
import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import { getNewRecipes, test_ } from "../../redux/slices";
import { useDispatch, useSelector } from "react-redux";

function RecipeList() {
  const recipeList = useSelector((state) => state.recipeReducer.recipeList);
  const [recipes, setRecipes] = useState([]);
  const recipeDispatch = useDispatch();

  useEffect(() => {
    recipeDispatch(getNewRecipes());
  }, []);

  return (
    <div class="row row-cols-1 row-cols-md-3  row-cols-lg-4 g-4">
      <button
        className="btn btn-primary"
        onClick={() => recipeDispatch(test_())}
      >
        test
      </button>
      {recipeList.map((item) => (
        <RecipeCard key={item.id} {...item} />
      ))}
    </div>
  );
}

export default RecipeList;

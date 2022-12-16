import axios from "axios";
import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  const apiKey = "2111d2ffc8e049adb118bd772a5ca9a4";

  useEffect(() => {
    axios
      .get(
        "https://api.spoonacular.com/recipes/random?number=5&apiKey=" + apiKey
      )
      .then((res) => setRecipes(res.data.recipes))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div class="row row-cols-1 row-cols-md-3 g-4">
      {recipes.map((item) => (
        <RecipeCard key={item.id} {...item} />
      ))}
    </div>
  );
}

export default RecipeList;

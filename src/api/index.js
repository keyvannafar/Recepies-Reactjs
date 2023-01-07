const apiKey = "2111d2ffc8e049adb118bd772a5ca9a4";
const api = {
  getNewRecipes: {
    path: "https://api.spoonacular.com/recipes/random?number=5",
    parameters: {
      number: "",
      apiKey: `&apiKey=${apiKey}`,
    },
    options: {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
    method: "GET",
  },
  getRecipesByName: {
    path: "https://api.spoonacular.com/recipes/complexSearch?",
    parameters: {
      number: "",
      apiKey: `&apiKey=${apiKey}`,
    },
    options: {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
    method: "GET",
  },
};

export { apiKey, api };

const { recipes } = require("./data/recipes");

const getRecipeById = (req, res) => {
  const { id } = req.params;

  if (id !== undefined) {
    if (recipes !== undefined) {
      const recipe = recipes.filter((recipe) => recipe.recipeId === +id);
      if (recipe.length > 0) {
        res.status(200).json({ status: 200, recipe });
      } else {
        res
          .status(404)
          .json({ status: 404, message: `Recipe not found with id: ${id}` });
      }
    }
    {
      res.status(404).json({ status: 404, message: "Recipes not found" });
    }
  } else {
    res.status(404).json({ status: 404, message: "id is missing" });
  }
};

const postRecipe = (req, res) => {
  if (req.body !== undefined) {
    const { recipeId, title, ingredients = [] } = req.body;

    if (
      recipeId !== undefined &&
      title !== undefined &&
      ingredients.length > 0
    ) {
      recipes.push({ recipeId, title, ingredients });
      res
        .status(200)
        .json({ status: 200, data: { recipeId, title, ingredients } });
    } else {
      res.status(404).json({ status: 404, error: "data is missing" });
    }
  } else {
    res.status(404).json({ status: 404, error: "data is missing" });
  }
};

const getRecipes = (req, res) => {
  if (recipes !== undefined) {
    res.status(200).json({ recipes });
  }
};

module.exports = { postRecipe, getRecipes, getRecipeById };

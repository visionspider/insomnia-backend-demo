"use strict";

// import the needed node_modules.
const express = require("express");
const morgan = require("morgan");
const { postRecipe, getRecipes, getRecipeById } = require("./handlers");

// Require the DATA
express();
const app = express();
// Below are methods that are included in express(). We chain them for convenience.
// --------------------------------------------------------------------------------

// This will give us will log more info to the console. see https://www.npmjs.com/package/morgan
app.use(morgan("dev"));
app.use(express.json());

// Nothing to modify above this line
// ---------------------------------
// add new endpoints here 👇
app.get("/recipe/:id", getRecipeById);
app.get("/recipes", getRecipes);
app.post("/recipe", postRecipe);
// add new endpoints here ☝️
// ---------------------------------
// Nothing to modify below this line

// this is our catch all endpoint.
app.get("*", (req, res) => {
  res.status(404).json({
    status: 404,
    message: "This is obviously not what you are looking for.",
  });
});

// Node spins up our server and sets it to listen on port 8000.
app.listen(8000, () => console.log(`Listening on port 8000`));

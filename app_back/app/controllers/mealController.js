const {Meal , Group, Recipe} = require('../models');

const mealController = {
  // les cards d'une liste
  allMeals: async (req, res) => {
      const meals = await Meal.findAll({
        include:  "recipes"

    });
      // on renvoie les cartes
      res.json(meals);

  }, 
  oneMeal: async (req, res) => {
    try {
    const mealId = parseInt(req.params.id);
    const meal = await Meal.findByPk(mealId,{
      include:  "recipes"
  });
// send the details or not found
    if(meal){
      res.json(meal);
    } else {
      res.status(404).json({error: "meal not found"});
    }
} catch(error) {
  console.log(error);
  res.status(500).json({error});
}
},
// function to associate a recipe to a meal
  associateRecipe: async (recipeId, mealId, numberPeople) => {
    const recipe = await Recipe.findByPk(recipeId);
    if (!recipe)
    {
      res.json({error: "recipe does not exist"});
    }
    const meal = await Meal.findByPk(mealId);
    if (!meal)
    {
      res.json({error: "meal does not exist"});
    }
    await meal.addRecipes(recipe, {through : {numberPeople : numberPeople}});
    return;
},
// les cards d'une liste
addRecipe: async (req, res) => {
  try {
    const recipeId = parseInt(req.body.recipeId);
    const mealId = parseInt(req.body.mealId);
    const numberPeople = req.body.numberPeople;
    const recipe = await Recipe.findByPk( recipeId);
    if(!recipe){
      res.json({error: "recipe does not exist"});
    }
    let meal= await Meal.findByPk(mealId,{
      include: "recipes",
  });
  if(!meal){
    res.json({error: "meal does not exist"});
  }
    await mealController.associateRecipe(recipeId,mealId,numberPeople);

    meal = await Meal.findByPk(mealId,{
      include: "recipes",
  });
// send the details or not found
  if(meal){
    res.json({message: meal});
  } 
} catch(error) {
console.log(error);
res.status(500).json({error});
}
},
 // les cards d'une liste
 createMeal: async (req, res) => {
  try {
    const day = req.body.day;
    const time = req.body.time;
    const groupId = parseInt(req.body.groupId);
    let group = await Group.findByPk( groupId, {
      include: "meals"});
    if(!group){
      res.json({error: "group does not exist"});
    } 
    console.log(" inputs day ", day, " time ", time)
  
    const mealExists = group.meals.find(meal => (
      (day === meal.day ) && ( time === meal.time)
    ))
    if (mealExists) {
      res.json({error: "you have already scheduled  meal for this time"});
    } else {
      const meal = await Meal.create({day, time});
      await group.addMeals(meal);
      group = await Group.findByPk( groupId, {
        include: "meals"});
      res.json({message: group});
    }

  }  catch(error) {
console.log(error);
res.status(500).json({error});
}
},
// function to remove a recipe from a meal
removeRecipe: async (req, res) => {
  try {
  const mealId = parseInt(req.body.mealId);
  const recipeId = parseInt(req.body.recipeId);

  const recipe = await Recipe.findByPk(recipeId);
  if (!recipe)
  {
    res.json({error: "recipe does not exist"});
  }
  let meal = await Meal.findByPk(mealId,{
    include : "recipes",
  });
  if (!meal)
  {
    res.json({error: "meal does not exist"});
  }
  // on renvoie les cartes

  const foundRecipe = meal.recipes.find( recipe => recipe.id === recipeId);
  if (!foundRecipe ) {
    res.json({error: "this recipe is not part of the meal"});
  }
 
  await meal.removeRecipes(recipe);
 meal = await Meal.findByPk(mealId,{
    include : "recipes",
  });
  res.json({message: meal});
  return;
} catch(error) {
  console.log(error);
  res.status(500).json({error});
  }
},

//delete Meal 
deleteMeal: async (req, res) => {
  try {
  const mealId = parseInt(req.params.id);
  const meal = await Meal.findByPk(mealId,{
    include:  ["recipes", "group"]
  });
// send the details or not found
  if(!meal) {
    res.status(404).json({error: "meal not found"});
  }
  for (recipe of  meal.recipes) {
    const recipeInstance = await Recipe.findByPk(recipe.id);
    if (!recipe)
    {
      res.json({error: "recipe does not exist"});
    }
    await meal.removeRecipes(recipeInstance);
}
  await meal.destroy();
  res.status(200).json({message: "meal deleted"});

} catch(error) {
console.log(error);
res.status(500).json({error});
}
},
};

module.exports = mealController;

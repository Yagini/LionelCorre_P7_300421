export const createMedia = (data) => {
  addMedia(data);  
}

const addMedia = (data) => {
  const mediaContent = document.querySelector(".media__content");

  const recipes = data.recipes;

  recipes.forEach((recipe) => {
    const mediaBlock = document.createElement("article");
    mediaBlock.classList.add("media__block");    

    const mediaImage = document.createElement("div");
    mediaImage.classList.add("media__img");

    const mediaRecipe = document.createElement("section");
    mediaRecipe.classList.add( "media__recipe");

    const mediaHeading = document.createElement("div");
    mediaHeading.classList.add("media__heading");

    const mediaTitle = document.createElement("h2");
    mediaTitle.classList.add("media__title");
    mediaTitle.textContent = recipe.name;

    const mediaCookingTimer = document.createElement("div");
    mediaCookingTimer.classList.add("media__cooking-timer");

    const mediaCookingTimerIcon = document.createElement("i");
    mediaCookingTimerIcon.classList.add("far", "fa-clock", "media__cooking-timer--icon");

    const mediaCookingTimerText = document.createElement("p");
    mediaCookingTimerText.classList.add("media__cooking-timer--text");
    mediaCookingTimerText.textContent = recipe.time + " min";

    const mediaTask = document.createElement("div");
    mediaTask.classList.add("media__task");

    const mediaIngredients = document.createElement("ul");
    mediaIngredients.classList.add("media__ingredients");

    recipe.ingredients.forEach((ingredient) => {
      const mediaIngredientsList = document.createElement("li");
      mediaIngredientsList.classList.add("ingredients__list");
      mediaIngredientsList.textContent = ingredient.ingredient + " " + ingredient.quantity + " " + ingredient.unit;
      mediaIngredients.appendChild(mediaIngredientsList);
    });

    const mediaCookingInstruction = document.createElement("p");
    mediaCookingInstruction.classList.add("media__cooking-instruction");
    mediaCookingInstruction.textContent = recipe.description;    

    mediaCookingTimer.appendChild(mediaCookingTimerIcon);
    mediaCookingTimer.appendChild(mediaCookingTimerText);

    mediaHeading.appendChild(mediaTitle);
    mediaHeading.appendChild(mediaCookingTimer);

    mediaTask.appendChild(mediaIngredients);
    mediaTask.appendChild(mediaCookingInstruction);

    mediaRecipe.appendChild(mediaHeading);
    mediaRecipe.appendChild(mediaTask);

    mediaBlock.appendChild(mediaImage);
    mediaBlock.appendChild(mediaRecipe);

    mediaContent.appendChild(mediaBlock);
  });
};

/*const addfilters = (data) =>{
  const ingredientsFilters = document.getElementById("ingredients-filter-list")
  const recipes = data.recipes;
  const allIngredients = recipes.ingredients; 
  const ingredientList = allIngredients.ingredient;

  ingredientList.forEach((ingredient) => {
    const ingredientList = document.createElement("li")
    ingredientList.classList.add("ingredients__filter-list");
    ingredientList.textContent = ingredient.ingredientList;
    ingredientsFilters.appendChild(ingredientList);
  })
} */

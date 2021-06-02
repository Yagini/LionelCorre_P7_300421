export const createMedia = (recipes) => {
  addMedia(recipes);
  //search(recipes);
  search2(recipes);
  
};

const addMedia = (recipes) => {
  const mediaContent = document.querySelector(".media__content");
  mediaContent.innerHTML= "";

  recipes.map((recipe) => {
    const mediaBlock = document.createElement("article");
    mediaBlock.classList.add("media__block");

    const mediaImage = document.createElement("div");
    mediaImage.classList.add("media__img");

    const mediaRecipe = document.createElement("section");
    mediaRecipe.classList.add("media__recipe");

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
      mediaIngredientsList.innerHTML = `<strong>${ingredient.ingredient}`;
      mediaIngredientsList.innerHTML += ingredient.quantity ? ` : </strong><span>${ingredient.quantity}` : `</strong>`;
      mediaIngredientsList.innerHTML += ingredient.unit ? ` ${ingredient.unit}</span>` : `</span>`;
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

/* */
/**
 *
 * @param {Array} recipes
 */


/*const search = (recipes) => {
  const searchInput = document.getElementById('search');  
  searchInput.addEventListener('keyup', () => addMedia(getResults(recipes, searchInput.value.toLowerCase())));
};

const getResults = (recipes, input) => {
  if (input.length < 3) return recipes;
  const results = [];
  for (let i = 0; i < recipes.length; i++) {
    const {description, ingredients, name} = recipes[i];
    const isInName = name.toLowerCase().includes(input);
    const isInDescription = description.toLowerCase().includes(input);
    let isInIngredients = false;
    for (let j = 0; j < ingredients.length; j++)
      if (ingredients[j].ingredient.toLowerCase().includes(input)) {
        isInIngredients = true;
      }
    if (isInName || isInDescription || isInIngredients) results.push(recipes[i]);
  }
  return results;
};*/

const search2 = (recipes) => {
  const searchInput = document.getElementById("search");
  searchInput.addEventListener("keyup", () => addMedia(getResults(recipes, searchInput.value.toLowerCase())));
}

const getResults = (recipes, input) => {  
  if (input.length < 3) return recipes;  
  const filteredMedia = recipes.filter((recipe) => {
    return(
      recipe.name.toLowerCase().includes(input) || 
      recipe.description.toLowerCase().includes(input) ||
      recipe.ingredients.some((ingredient) => ingredient.ingredient.toLowerCase().includes(input))
    )    
  });
  return filteredMedia;  
};



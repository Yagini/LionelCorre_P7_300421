import { manageTags } from "./tags-search.js";

export const createMedia = (recipes) => {
  addMedias(recipes);  
  search2(recipes);
};

/* =======================================
==              LOGIQUE                ==
=======================================*/

/**
 * Fonction qui traite les recherches dans la barres principales
 * Ecoute l'event sur l'input puis traite l'information et créer un nouveau
 * template avec les recettes qui sont trié par la fonction getResults
 * @param {Array} recipes
 */

 const search2 = (recipes) => {
  const searchInput = document.getElementById("search");
  const error = document.getElementById("media__error");  
  searchInput.addEventListener("keyup", () => {     
    const filteredRecipes = getResults(recipes, searchInput.value.toLowerCase());
    addMedias(filteredRecipes);
    manageTags(filteredRecipes);
    error.style.display = filteredRecipes.length === 0 ? 'block' : 'none';
  });     
};

/**
 * Fonction qui se charge de filtrer dans les éléments du tableaux (name, ingredients, description).
 * La méthode filter créer et retourne un nouveau tableau contenant tous les éléments du tableau d'origine
 * en écartant les éléments qui ne correspondent pas l'appelle de la fonction callback
 * @param {array} recipes
 * @param {string} input
 * @returns
 */ 

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

/* =======================================
==              TEMPLATES              ==
=======================================*/

/**
 * Création des medias recette
 * @param {array} recipes
 */

const addMedias = (recipes) => {
  const mediaContent = document.querySelector(".media__content");
  mediaContent.innerHTML = "";
  recipes.forEach(addMedia);
}

const addMedia = (recipe) => {
  const mediaContent = document.querySelector(".media__content");
  
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
};
  


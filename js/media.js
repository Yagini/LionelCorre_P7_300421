//import { recipes } from "./recipes";
const searchInput = document.getElementById("search");
const results = [];
export const createMedia = (recipes) => {
  addMedia(recipes);
  search(recipes);
};

/*const displayRecipe = () => {
  
  // tout ce qui concerne l'affichage des éléments
}*/

const addMedia = (recipes) => {
  const mediaContent = document.querySelector(".media__content");

  recipes.forEach((recipe) => {
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

    /*recipe.ingredients.forEach((ingredient) => {
      const mediaIngredientsList = document.createElement("li");
      mediaIngredientsList.classList.add("ingredients__list");
      mediaIngredientsList.innerHTML = `<strong>${ingredient.ingredient}`;
      mediaIngredientsList.innerHTML += ingredient.quantity ? ` : </strong><span>${ingredient.quantity}` : `</strong>`;
      mediaIngredientsList.innerHTML += ingredient.unit ? ` ${ingredient.unit}</span>` : `</span>`;
      mediaIngredients.appendChild(mediaIngredientsList);
    });*/

    const mediaCookingInstruction = document.createElement("p");
    mediaCookingInstruction.classList.add("media__cooking-instruction");
    mediaCookingInstruction.textContent = recipe.description;

    mediaCookingTimer.appendChild(mediaCookingTimerIcon);
    mediaCookingTimer.appendChild(mediaCookingTimerText);

    mediaHeading.appendChild(mediaTitle);
    mediaHeading.appendChild(mediaCookingTimer);

    //mediaTask.appendChild(mediaIngredients);
    mediaTask.appendChild(mediaCookingInstruction);

    mediaRecipe.appendChild(mediaHeading);
    mediaRecipe.appendChild(mediaTask);

    mediaBlock.appendChild(mediaImage);
    mediaBlock.appendChild(mediaRecipe);

    mediaContent.appendChild(mediaBlock);
  });
};

/*const ingredientsList = (recipe, results) => {
  if (searchInput.value.length < 3) {
    recipe.ingredients.forEach((ingredient) => {
      const mediaIngredientsList = document.createElement("li");
      mediaIngredientsList.classList.add("ingredients__list");
      mediaIngredientsList.innerHTML = `<strong>${ingredient.ingredient}`;
      mediaIngredientsList.innerHTML += ingredient.quantity ? ` : </strong><span>${ingredient.quantity}` : `</strong>`;
      mediaIngredientsList.innerHTML += ingredient.unit ? ` ${ingredient.unit}</span>` : `</span>`;      
    }); 
  } else if (searchInput.value.length > 2) {
    results.ingredients.forEach((ingredient) => {
      const mediaIngredientsList = document.createElement("li");
      mediaIngredientsList.classList.add("ingredients__list");
      mediaIngredientsList.innerHTML = `<strong>${ingredient.ingredient}`;
      mediaIngredientsList.innerHTML += ingredient.quantity ? ` : </strong><span>${ingredient.quantity}` : `</strong>`;
      mediaIngredientsList.innerHTML += ingredient.unit ? ` ${ingredient.unit}</span>` : `</span>`;      
    });
  }
};*/

/*const filterRecipe = (searchInput) => (recipe) => {
  
  const recipeName = recipe.name.search(searchInput) !== -1;
  const recipeDescription = recipe.description.search(searchInput) !== -1;
  const recipeIngredient = recipe.ingredients.includes(searchInput);
  const resultFilter = recipeName || recipeDescription || recipeIngredient;
  console.log(resultFilter)
};*/
/* */
/**
 *
 * @param {*} recipes
 */

const search = (recipes) => {
  searchInput.addEventListener("keyup", () => {
    if (searchInput.value.length > 2) {
      resultsByName();
      resultsByDescriptions();
      //resultsByIngredients();
      //resultsByDevices();
      //resultsByUstensils();

      document.getElementById("media__content").innerHTML = "";
      addMedia(results);
    } else if (searchInput.value.length < 3) {
      results.length = 0;
      document.getElementById("media__content").innerHTML = "";
      addMedia(recipes);
    }  

  });

  const resultsByName = () => {
    for (let i = 0; i < recipes.length; i++) {
      const inputValue = searchInput.value;
      const recipe = recipes[i];
      const recipeNameValue = recipe.name.toLowerCase().search(inputValue);
      if (recipeNameValue !== -1) {
        results.push(inputValue);
      }
    }
  };

  const resultsByDescriptions = () => {
    for (let j = 0; j < recipes.length; j++) {
      const inputValue = searchInput.value;
      const recipe = recipes[j];
      const recipeDescriptionValue = recipe.description.toLowerCase().search(inputValue);
      if (recipeDescriptionValue !== -1) {
        results.push(inputValue);
      }
    }
  };
  /*const resultsByIngredients = () => {
    for (let h = 0; h < recipes.length; h++) {
      const inputValue = searchInput.value;
      const recipe = recipes[h];
      const recipeIngredientsValue = recipe.ingredient.toLowerCase().search(inputValue);
      console.log(recipeIngredientsValue);
      if (recipeIngredientsValue === inputValue) {
        results.push(inputValue);
      }
    }
  };

  const resultsByDevices = () => {
    for (let i = 0; i < recipes.length; i++) {
      const inputValue = searchInput.value;
      const recipe = recipes[i];
      const recipeDevicesValue = recipe.appliance.toLowerCase().search(inputValue);
      console.log(recipeDevicesValue);
      if (recipeDevicesValue !== -1) {
        results.push(inputValue);
      }
    }
  };

  const resultsByUstensils = () => {
    for (let i = 0; i < recipes.length; i++) {
      const inputValue = searchInput.value;
      const recipe = recipes[i];
      const recipeUstensilsValue = recipe.ustensils.toLowerCase().search(inputValue);
      console.log(recipeUstensilsValue);
      if (recipeUstensilsValue !== -1) {
        results.push(inputValue);
      }
    }
  };*/

  /*for(let j = 0; j < recipes.length; j++) {
    const recipe = recipes[j];
    //const recipeDescriptionValue = recipe.description.Search(searchInput)
    console.log(recipe)
   if (recipeDescriptionValue !== -1) {
      results.push(searchInput);
    } 
  }*/

  /*for(let h = 0; h < recipes.length; h++) {
    const recipe = recipes[h];
    console.log(recipe)
    //const recipeDescriptionValue = recipe.ingredients.includes(searchInput)

    if (recipeDescriptionValue === searchInput) {
      results.push(searchInput);
    }
  }*/
};

/*const search2 = (recipes) => {
  const searchInput = document.getElementById("search")  
  searchInput.addEventListener("keyup", () => {
   const inputValue = searchInput.value;    
   recipes.filter( recipes.description === inputValue)
  })
}; */ 


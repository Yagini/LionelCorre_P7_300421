export const TagSearch = (recipes) => {
  const appliancesList = createApplianceList(recipes);
  const ustensilsList = createUstensilsList(recipes);
  const ingredientsList = createIgredientsList(recipes);
  // Fontion qui gère les Set de tag
  addTagSet(appliancesList, ustensilsList, ingredientsList);

  // fonction qui permet l'action sur les button
  addButtonAction();

  // fonction qui gère l'entrée dans les champs input
  filterByType(appliancesList, ustensilsList, ingredientsList);

  // fonction qui gère la barre des tags
  createTag();

  //tagFilter(recipes, appliancesList)
};

/**
 * Fonctions qui créent des nouveaux Set de chaque éléments 
 * puis les réinjectes dans un nouveau tableau 
 * @param {array} recipes 
 * @returns 
 */
const createApplianceList = (recipes) => {
  const appliancesList = new Set();
  recipes.forEach((recipe) => {
    appliancesList.add(recipe.appliance);
  });
  return [...appliancesList];
};

const createUstensilsList = (recipes) => {
  const ustensilsList = new Set();
  recipes.forEach((recipe) =>
    recipe.ustensils.forEach((ustensil) => {
      ustensilsList.add(ustensil);
    })
  );
  return [...ustensilsList];
};

const createIgredientsList = (recipes) => {
  const ingredientsList = new Set();
  recipes.forEach((recipe) =>
    recipe.ingredients.forEach((ingredient) => {
      ingredientsList.add(ingredient.ingredient);
    })
  );
  return [...ingredientsList];
};

/**
 * Fonction qui gère la partie créations des tags
 * en créant une liste unique pour chaque éléments
 * @param {Array} recipes
 */

const addTagSet = (appliances, ustensils, ingredients) => {
  const applianceFilterList = document.getElementById("appliances__filter-list");
  const ustensilFilterList = document.getElementById("ustensils__filter-list");
  const ingredientsFilterList = document.getElementById("ingredients__filter-list");
  applianceFilterList.innerHTML = "";
  ustensilFilterList.innerHTML = "";
  ingredientsFilterList.innerHTML = "";

  for (const appliance of appliances) {
    const appliancesList = document.createElement("li");
    appliancesList.classList.add("appliances__list");
    applianceFilterList.appendChild(appliancesList);
    appliancesList.textContent = appliance;
  }
  
  for (const ustensil of ustensils) {
    const ustensils = document.createElement("li");
    ustensils.classList.add("ustensils__list");
    ustensilFilterList.appendChild(ustensils);
    ustensils.textContent = ustensil;
  }

  for (const ingredient of ingredients) {
    const ingredients = document.createElement("li");
    ingredients.classList.add("ingredients__list");
    ingredientsFilterList.appendChild(ingredients);
    ingredients.textContent = ingredient;
  }
};

/**
 * Fonction qui gère le listener sur les boutons chevron
 * créer un menu déroulant
 */

const addButtonAction = () => {
  const applianceBtnDown = document.getElementById("appliances__btn--down");
  const applianceBtnUp = document.getElementById("appliances__btn--up");
  const applianceFilters = document.getElementById("filters__all--appliances");
  applianceBtnDown.addEventListener("click", () => {
    applianceFilters.style.display = "block";
    applianceBtnDown.style.display = "none";
    applianceBtnUp.style.display = "block";
  });
  applianceBtnUp.addEventListener("click", () => {
    applianceFilters.style.display = "none";
    applianceBtnDown.style.display = "block";
    applianceBtnUp.style.display = "none";
  });

  const ingredientBtnDown = document.getElementById("ingredients__btn--down");
  const ingredientBtnUp = document.getElementById("ingredients__btn--up");
  const ingredientFilters = document.getElementById("filters__all--ingredients");
  ingredientBtnDown.addEventListener("click", () => {
    ingredientFilters.style.display = "block";
    ingredientBtnDown.style.display = "none";
    ingredientBtnUp.style.display = "block";
  });
  ingredientBtnUp.addEventListener("click", () => {
    ingredientFilters.style.display = "none";
    ingredientBtnDown.style.display = "block";
    ingredientBtnUp.style.display = "none";
  });

  const ustensilBtnDown = document.getElementById("ustensils__btn--down");
  const ustensilBtnUp = document.getElementById("ustensils__btn--up");
  const ustensilFilters = document.getElementById("filters__all--ustensils");  
  ustensilBtnDown.addEventListener("click", () => {
    ustensilFilters.style.display = "block";
    ustensilBtnDown.style.display = "none";
    ustensilBtnUp.style.display = "block";    
  });
  ustensilBtnUp.addEventListener("click", () => {
    ustensilFilters.style.display = "none";
    ustensilBtnDown.style.display = "block";
    ustensilBtnUp.style.display = "none";
  });
};

/**
 * Fonction pour l'ajout des tags aux clics dans la barre de tag
 * et ferme les tags aux clics
 */

const createTag = () => {
  const appliancesList = document.querySelectorAll(".appliances__list");
  const ustensilsList = document.querySelectorAll(".ustensils__list");
  const ingredientsList = document.querySelectorAll(".ingredients__list");  

  appliancesList.forEach((appliance) => {
    appliance.addEventListener("click", () => {
      createTagDisplay(appliance, "tag--appliances");
      appliance.classList.add("list--disabled");
    });
  });

  ustensilsList.forEach((ustensil) => {
    ustensil.addEventListener("click", () => {
      createTagDisplay(ustensil, "tag--ustensils");
      ustensil.classList.add("list--disabled");      
    });
  });  

  ingredientsList.forEach((ingredient) => {
    ingredient.addEventListener("click", () => {
      createTagDisplay(ingredient, "tag--ingredients");
      ingredient.classList.add("list--disabled");
    });
  });  
  
};

/**
 * Fonction de création du template pour les tags qui sont épinglés
 * @param {array} item 
 * @param {string} className 
 */

const createTagDisplay = (item, className) => {
  const itemText = item.textContent;
  const tagList = document.querySelector(".tag__list");
  const tag = document.createElement("div");
  tag.classList.add("tag", className);
  tag.setAttribute("id", "tag");
  const tagText = document.createElement("p");
  tagText.classList.add("tag__text");
  tagText.setAttribute("id", "tag__text");
  tagText.textContent = itemText;
  const tagIcon = document.createElement("i");
  tagIcon.classList.add("far", "fa-times-circle", "tag__close");
  tagIcon.addEventListener("click", () => {
    tag.style.display = "none";
  });
  tag.appendChild(tagText);
  tag.appendChild(tagIcon);
  tagList.appendChild(tag);
};

/**
 * Fonction qui gère les entrées dans les champs inputs
 * recherche par tags
 * @param {Array} recipes
 */

const filterByType = (appliances, ustensils, ingredients) => {
  const applianceInput = document.getElementById("appliance__input");
  const ustensilInput = document.getElementById("ustensil__input");
  const ingredientInput = document.getElementById("ingredient__input");
  applianceInput.addEventListener("keyup", () =>
    addTagSet(applianceFilter(appliances, applianceInput.value.toLowerCase()))
  )
  ustensilInput.addEventListener("keyup", () =>
    addTagSet(ustensilFilter(ustensils, ustensilInput.value.toLowerCase()))
  )
  ingredientInput.addEventListener("keyup", () =>
    addTagSet(ingredientFilter(ingredients, ustensilInput.value.toLowerCase()))
  );
};

const applianceFilter = (appliances, input) => {
  const filter = appliances.filter((appliance) => {
    return appliance.toLowerCase().includes(input);
  });
  return filter;
};

const ustensilFilter = (ustensils, input) => {
  const filter = ustensils.filter((ustensil) => {
    return ustensil.toLowerCase().includes(input);
  });
  return filter;
};

const ingredientFilter = (ingredients, input) => {
  const filter = ingredients.filter((ingredient) => {
    return ingredient.toLowerCase().includes(input);
  });
  return filter;
};

// Fontion qui trie les dropdowns quand on tape dans la barre de recherche principale
/*const tagFilter = (recipes, appliances) => {
  const searchInput = document.getElementById("search");
  searchInput.addEventListener("keyup", () => filterByType(getResults(recipes, appliances.value.toLowerCase())));
}

const getResults = (recipes, input) => {     
  const filteredMedia = recipes.filter((recipe) => {
    return(
      recipe.appliance.toLowerCase().includes(input)  
    )    
  });
  return filteredMedia;  
};*/

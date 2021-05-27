// Créer la liste des ingrédients à partir du recipe
// quand on tape dans l'input filtre les ingrédients

// au clic sur le chevron ouvre la liste des ingrédients
// au clic sur un ingrédient l'ajoute au tag list

export const TagSearch = (recipes) => {
  const applianceListWithoutDuplicate = createApplianceList(recipes);
  const ustensilsListWithoutDuplicate = createUstensilsList(recipes);
  // Fontion qui gère les Set de tag
  addTagSet(applianceListWithoutDuplicate, ustensilsListWithoutDuplicate);

  // fonction qui permet l'action sur les button
  addButtonAction();

  // fonction qui gère la barre des tags
  addTagFilter();

  // fonction qui gère l'entrée dans les champs input
  addSearchInput(applianceListWithoutDuplicate);
};

const createApplianceList = (recipes) => {
  const appliancesList = recipes.reduce((acc, el) => {
    return acc.add(el.appliance);
  }, new Set());
  return [...appliancesList];
};

const createUstensilsList = (recipes) => {
  const ustensilsList = recipes.reduce((acc, el) => {
    return acc.add(el.ustensils);
  }, new Set());
  return [...ustensilsList];
};

/**
 * Fonction qui gère la partie des tags
 * qui évite les doublons avec Set()
 * @param {Array} recipes
 */

const addTagSet = (appliances) => {
  const applianceFilterList = document.getElementById("appliances__filter-list");
  const ustensilFilterList = document.getElementById("ustensils__filter-list");
  applianceFilterList.innerHTML = "";
  ustensilFilterList.innerHTML = "";

  appliances.forEach((appliance) => {
    const appliancesList = document.createElement("li");
    appliancesList.classList.add("appliances__list");
    applianceFilterList.appendChild(appliancesList);
    appliancesList.textContent = appliance;
  });

  /*for (const ustensil of ustensils) {
    const ustensils = document.createElement("li");
    ustensils.classList.add("ustensils__list");
    ustensilFilterList.appendChild(ustensils);
    ustensils.textContent = ustensil;
  }*/
};

/**
 * Fonction qui gère le listener sur les boutons chevron
 * créer un menu déroulant
 */

const addButtonAction = () => {
  const appliancesBtn = document.getElementById("appliances__btn");
  const appliancesFilters = document.getElementById("filters__all--appliances");
  appliancesBtn.addEventListener("click", () => {
    if (appliancesFilters.style.display === "none") {
      appliancesFilters.style.display = "block";
    } else {
      appliancesFilters.style.display = "none";
    }
  });
  /*const ingredientBtn = document.getElementById("ingredients__btn");
  const ingredientFilters = document.getElementById("filters__all--ingredients");
  ingredientBtn.addEventListener("click", () => {
    if (appliancesFilters.style.display === "none") {
      ingredientFilters.style.display = "block";
    } else {
      ingredientFilters.style.display = "none";
    }
  });*/
  const ustensilsBtn = document.getElementById("ustensils__btn");
  const ustensilsFilters = document.getElementById("filters__all--ustensils");
  ustensilsBtn.addEventListener("click", () => {
    if (ustensilsFilters.style.display === "none") {
      ustensilsFilters.style.display = "block";
    } else {
      ustensilsFilters.style.display = "none";
    }
  });
};

/**
 * Fonction pour l'ajout des tags aux clics dans la barre de tag
 * et ferme les tags aux clics
 */

const addTagFilter = () => {
  createTag();
  
};

const createTag = () => {
  const appliancesList = document.querySelectorAll(".appliances__list");
  const ustensilslist = document.querySelectorAll(".ustensils__list");

  appliancesList.forEach((appliance) => {
    console.log(appliance);
    appliance.addEventListener("click", () => {
      createTagDisplay(appliance, "tag--appliances");
    });         
  });

  /*ustensilslist.forEach((ustensil) => {
    console.log(ustensil);
    ustensil.addEventListener("click", () => {
      createTagDisplay(ustensil);
      const ustensilText = ustensil.textContent;
      const tagElement = document.getElementById("tag");
      const tagText = document.getElementById("tag__text");
      tagText.textContent = ustensilText;
      tagElement.style.display = "flex";
      tagElement.style.backgroundColor = "#68D9A4";
      tagClose();
    });
  });*/
};

const createTagDisplay = (item, className) => {
  const appliancesText = item.textContent;
  const tagList = document.querySelector(".tag__list");
  const tag = document.createElement("div");
  tag.classList.add("tag", className);
  tag.setAttribute("id", "tag");
  const tagText = document.createElement("p");
  tagText.classList.add("tag__text");
  tagText.setAttribute("id", "tag__text");
  tagText.textContent = appliancesText;
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

const applianceResults = [];
const addSearchInput = (appliances) => {
  console.log(appliances);
  const applianceInput = document.getElementById("appliance__input");

  applianceInput.addEventListener("keyup", () => {
    if (applianceInput.value.length > 2) {
      //const inputValue = applianceInput.value;
      /*appliances.forEach((appliance) => {
        if (appliance.toLowerCase().indexOf(inputValue) === 1) {
          console.log(appliance);
          applianceResults.push(appliance);
        }
      });*/
      //appliances.filter(appliances.value === inputValue)

    const inputValue = applianceInput.value;
    appliances.forEach((appliance) => {
      const applianceNameValue = appliance.toLowerCase().includes(inputValue);
      console.log(applianceNameValue);
      if (applianceNameValue !== false) {
        applianceResults.push(appliance);
      }
    });
    addTagSet(applianceResults);
    }
  });
};

/**/

/*const ingredientsSet = new Set()
    recipes.ingredients.forEach((recipe) => {        
        //recipe.ingredients.forEach( (ingredient) => {
            ingredientsSet.add(recipe);
        //});
        console.log(ingredientsSet)        
    });  
    
    ingredientsSet.forEach(() => {
        const ingredients = document.createElement("li");
        ingredients.classList.add("ingredients");
        ingredientFilterList.appendChild(ingredients);
        ingredients.innerHTML = ingredientsSet
    });*/
/*ingredientsSet.forEach(() => {
        const ingredients = document.createElement("li");
        ingredients.classList.add("ingredients");
        ingredientFilterList.appendChild(ingredients);
        ingredients.innerHTML = ingredientsSet
    });*/

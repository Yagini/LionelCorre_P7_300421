//const ingredientInput = document.getElementById("ingredient__input");
//const ingredientBtn = document.getElementById("ingredients__btn");
//const ingredientFilterList = document.getElementById("ingredients-filter-list");

//const tagClose = document.getElementsByClassName("tag__close");

const deviceFilterList = document.getElementById("devices__filter-list");

// Créer la liste des ingrédients à partir du recipe
// quand on tape dans l'input filtre les ingrédients

// au clic sur le chevron ouvre la liste des ingrédients
// au clic sur un ingrédient l'ajoute au tag list

export const TagSearch = (recipes) => {
  // Fontion qui gère les Set de tag
  addTagSet(recipes);

  // fonction qui permet l'action sur les button
  addButtonAction();

  // fonction qui gère la barre des tags
  addTagFilter();

  // fonction qui gère l'entrée dans les champs input
  addSearchInput(recipes);
};

/**
 * Fonction qui gère la partie des tags
 * qui évite les doublons avec Set()
 * @param {Array} recipes
 */

const addTagSet = (recipes) => {
  // Build a set with device
  const deviceList = recipes.reduce((acc, el) => {
    return acc.add(el.appliance);
  }, new Set());
  const deviceListWithoutDuplicate = [...deviceList];

  for (const device of deviceListWithoutDuplicate) {
    const devices = document.createElement("li");
    devices.classList.add("list__devices");
    deviceFilterList.appendChild(devices);
    devices.innerHTML = device;
  }
};

/**
 * Fonction qui gère le listener sur les boutons chevron
 * créer un menu déroulant
 */

const addButtonAction = () => {
  const devicesBtn = document.getElementById("devices__btn");
  const devicesFilters = document.getElementById("filters__all--devices");
  devicesBtn.addEventListener("click", () => {
    if (devicesFilters.style.display === "none") {
      devicesFilters.style.display = "block";
    } else {
      devicesFilters.style.display = "none";
    }
  });
  /*const ingredientBtn = document.getElementById("ingredients__btn");
  const ingredientFilters = document.getElementById("filters__all--ingredients");
  ingredientBtn.addEventListener("click", () => {
    if (devicesFilters.style.display === "none") {
      ingredientFilters.style.display = "block";
    } else {
      ingredientFilters.style.display = "none";
    }
  });
  const ustensilsBtn = document.getElementById("ustensils__btn");
  const ustensilsFilters = document.getElementById("filters__all--ustensils");
  ustensilsBtn.addEventListener("click", () => {
    if (devicesFilters.style.display === "none") {
      ustensilsFilters.style.display = "block";
    } else {
      ustensilsFilters.style.display = "none";
    }
  });*/
};

/**
 * Fonction pour l'ajout des tags au click dans la barre de tag
 * et ferme les tags aux clics
 */

const addTagFilter = () => { 
  createTag()
  tagClose()
};

const createTag = () => {
  const devicesList = document.querySelector(".list__devices"); 
  const tag = document.querySelector(".tag");
  const tagText = document.querySelector(".tag__text");
  devicesList.addEventListener("click", () => {   
    const devicesText = devicesList.innerHTML;
    console.log(devicesText);
    tag.style.display = "flex";
    tag.style.backgroundColor = "#68D9A4";
    tagText.textContent = devicesText;       
  });
};

const tagClose = () => {
  const tag = document.querySelector(".tag");
  const tagButton = document.querySelector(".tag__close")
  tagButton.addEventListener("click", () => {
    tag.style.display = "none";
  })
}



/**
 * Fonction qui gère les entrées dans les champs inputs
 * recherche par tags
 * @param {Array} recipes
 */

const deviceResults = [];
const addSearchInput = (recipes) => {
  console.log(recipes);
  const deviceInput = document.getElementById("device__input");
  deviceInput.addEventListener("keyup", () => {
    if (deviceInput.value.length > 2) {
      recipes.forEach((device) => {
        const inputValue = deviceInput.value;
        const deviceNameValue = device.appliance.toLowerCase().search(inputValue);
        console.log(deviceNameValue);
        if (deviceNameValue !== -1) {
          deviceResults.push(inputValue);
        }
        deviceFilterList.innerHTML = " ";
      });
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

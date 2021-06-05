/**
 * fonction qui va créer un dropdown pour chaque nouveau tableau 
 * @param {array} recipes 
 * @returns 
 */
export const manageTags = (recipes) => getCategories(recipes).forEach(createDropdown);

/*================================================
==                LOGIQUE                      ==
===============================================*/

/**
 * Fontion getCategories prend le tableau recipes en paramètre
 * const res prend  un tableau de categoryIds que l'on map en tableau clé / valeur [['appliances', newSet(), ...]]
 * et Object.fromEntries le transforme en objet
 * enfin Object.entries(res) tranforme l'objet res en tableau clé/valeur pour pouvoir map 
 * Set étant un ensemble de valeur unique, on doit le réinjecter dans un tableau
 * @param {Array} recipes 
 * @returns 
 */

const getCategories = (recipes) => {
  const res = Object.fromEntries(['appliances', 'ingredients', 'ustensils'].map((id) => [id, new Set()]));
  recipes.forEach(({appliance, ingredients, ustensils}) => {
    res.appliances.add(appliance);
    ingredients.forEach(({ingredient}) => res.ingredients.add(ingredient));
    ustensils.forEach((ustensil) => res.ustensils.add(ustensil));
  });
  return Object.entries(res).map(([id, set]) => [id, [...set]]);
};

/**
 * Fontion filterInput prend en paramètre input qui
 * renvoie une fonction filterInput qui prend en paramètre value
 * @param {string} input 
 * @returns 
 */

const filterInput = (input) => (value) => value.toLowerCase().includes(input.toLowerCase());

/*================================================
==                 TEMPLATE                    ==
===============================================*/

/**
 * Fonction qui gère la création des templates de chaque dropdown
 * @param {array} categoryID 
 * @param {arrays} values
 */

const createDropdown = ([categoryId, values]) => {
  const list = document.getElementById(`${categoryId}__filter-list`);
  const listWrapper = document.getElementById(`filters__all--${categoryId}`);
  const btnDown = document.getElementById(`${categoryId}__btn--down`);
  const btnUp = document.getElementById(`${categoryId}__btn--up`);
  const input = document.getElementById(`${categoryId}__input`);

  /**
   * Fonction qui gère la visibilité des dropdown en modifiant leur style
   * en utilisant des opérateurs ternaire
   */
  const setDisplay = (visibility) => () => {
    listWrapper.style.display = visibility ? 'block' : 'none';
    btnUp.style.display = visibility ? 'block' : 'none';
    btnDown.style.display = visibility ? 'none' : 'block';
  };

  /**
   * Fonction qui prend l'ensemble des tableaux d'ingredients, appliances, ustensils
   * qui va mettre à jour les dropdowns en créant des listes pour chaque object du tableau
   * @param {arrays} values 
   */
  const update = (values) => {
    list.innerHTML = '';
    values.map((value) => {
      const item = document.createElement('li');
      item.classList.add(`${categoryId}__list`);
      item.textContent = value;
      item.addEventListener('click', createTag(categoryId, item));
      list.appendChild(item);
    });
  };

  /** 
   * Methode qui écoute les events sur les boutons et 
   * les champs inputs des dropdowns
   */
  
  btnDown.addEventListener('click', setDisplay(true));
  btnUp.addEventListener('click', setDisplay(false));
  input.addEventListener('keyup', () => update(values.filter(filterInput(input.value))));
  update(values);  
};


/**
 * Fonction qui gère la création des tags épinglés 
 * @param {string} categoryId 
 * @param {object} item 
 * @returns 
 */
const createTag = (categoryId, item) => () => {  
  const tagList = document.querySelector('.tag__list');
  item.classList.add('list--disabled');
  const tag = document.createElement('div');
  tag.classList.add('tag', `tag--${categoryId}`);
  const tagText = document.createElement('p');
  tagText.classList.add('tag__text');
  tagText.textContent = item.textContent;
  const tagIcon = document.createElement('i');
  tagIcon.classList.add('far', 'fa-times-circle', 'tag__close');
  tagIcon.addEventListener('click', () => {
    tag.style.display = 'none'
    item.classList.remove('list--disabled');
  });
  tag.appendChild(tagText);
  tag.appendChild(tagIcon);
  tagList.appendChild(tag);
};

 


















const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');
let markup = "";

for (const ingredient of ingredients) {
  const listItem = document.createElement("li");
  listItem.classList.add("item");
  listItem.textContent = ingredient;
  markup += listItem.outerHTML; 
};

list.insertAdjacentHTML('beforeend', markup);
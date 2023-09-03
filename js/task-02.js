const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const newList = ingredients.forEach((ingredient) => {
  const ingredientsList = document.querySelector("#ingredients");
  const listItem = document.createElement("li");
  listItem.innerHTML = ingredient;
  listItem.classList.add("item");
  ingredientsList.append(listItem);
});

// ALTERNATYWNIE 1 :

// const ingredientsList = document.querySelector("#ingredients");

// const ingredientsListElements = ingredients.map((ingredient) => {
//   const listItem = document.createElement("li");
//   listItem.innerHTML = ingredient;
//   listItem.classList.add("item");
//   return listItem;
// });
// ingredientsList.append(...ingredientsListElements);

// ALTERNATYWNIE 2:

// const ingredientsList = document.querySelector("#ingredients");
// const array = [];

// for (const ingredient of ingredients) {
//   const listItem = document.createElement("li");
//   listItem.innerHTML = ingredient;
//   listItem.classList.add("item");
//   array.push(listItem);
// }
// ingredientsList.append(...array);

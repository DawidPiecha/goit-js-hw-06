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

// ALTERNATYWNIE:

// const ingredientsList = document.querySelector("#ingredients");
// const array = [];

// for (const ingredient of ingredients) {
//   const listItem = document.createElement("li");
//   listItem.innerHTML = ingredient;
//   listItem.classList.add("item");
//   array.push(listItem);
// }
// ingredientsList.append(...array);

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsList = document.querySelector("#ingredients");
const array = [];

for (const igredient of ingredients) {
  const listItem = document.createElement("li");
  listItem.innerHTML = igredient;
  listItem.classList.add("item");
  array.push(listItem);
}
ingredientsList.append(...array);

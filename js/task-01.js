const categories = document.querySelectorAll("#categories .item");
console.log("Number of categories:", categories.length);

categories.forEach((category) => {
  const categoryName = category.querySelector(".item h2");
  const elements = category.querySelectorAll(".item li");
  console.log("Category:", categoryName.textContent);
  console.log("Elements:", elements.length);
});

//ALTERNATYWNIE:

// const items = document.querySelectorAll(".item");
// console.log("Number of categories:", items.length);

// for (const item of items) {
//   console.log("Category:", item.firstElementChild.textContent);
//   console.log("Elements:", item.lastElementChild.children.length);
// }

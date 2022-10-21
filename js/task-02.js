const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
let list = document.querySelector("#ingredients");

let newElements = ingredients.forEach(item => {
let newEl = document.createElement("li");
newEl.textContent = item;
list.append(newEl)
newEl.classList.add("item")
})

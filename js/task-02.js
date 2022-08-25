/*Напиши скрипт, который для каждого элемента массива ingredients:
Создаст отдельный элемент < li >.Обзательно используй метод document.createElement().
Добавит название ингредиента как его текстовое содержимое.
Добавит элементу класс item.
После чего вставит все < li > за одну операцию в список ul#ingredients.*/
"use strict";


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const itemEl = document.querySelector('ul');
const elements = [];
for (let i = 0; i < ingredients.length; i += 1) {
  const ingredient = ingredients[i];

  const listEl = document.createElement('li');
  listEl.textContent = ingredient;
  listEl.classList.add('item');

  elements.push(listEl);

}
console.log(itemEl);
itemEl.append(...elements);
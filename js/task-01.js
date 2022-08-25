/*Напиши скрипт который:
Посчитает и выведет в консоль количество категорий в ul#categories,
то есть элементов li.item.
Для каждого элемента li.item в списке ul#categories, найдет и
выведет в консоль текст заголовка элемента(тега < h2 >) и
количество элементов в категории(всех вложенных в него < li >).*/
"use strict";

const itemEl = document.querySelector(`#categories`);
console.log(itemEl.children);
const heroTitleEl = itemEl.querySelectorAll(`.item`);
for (let i = 0; i < heroTitleEl.length; i++) {
    console.log(heroTitleEl[i].querySelector('h2').textContent);
    console.log(heroTitleEl[i].querySelectorAll('li').length);
};
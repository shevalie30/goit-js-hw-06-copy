/*Напиши скрипт, который изменяет цвета фона элемента < body >
через инлайн стиль при клике на button.change -
color и выводит значение цвета в span.color.
Для генерации случайного цвета используй функцию getRandomHexColor.*/
"use strict";


const buttonRef = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');
buttonRef.addEventListener('click', () => {
  spanEl.textContent = getRandomHexColor();
  document.body.setAttribute(
    'style',
    'background-color: ' + spanEl.textContent
  );
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

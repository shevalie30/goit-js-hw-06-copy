/*Счетчик состоит из спана и кнопок, которые, при клике,
должны увеличивать и уменьшать его значение на единицу.
Создай переменную counterValue в которой будет храниться
текущее значение счетчика и инициализируй её значением 0.
Добавь слушатели кликов на кнопки, внутри которых увеличивай или
уменьшай значение счтетчика.
Обновляй интерфейс новым значением переменной counterValue.*/
"use strict";


let counterValue = 0;
const increment = () => {
    counterValue += 1;

    document.getElementById('value').textContent = counterValue;
};

const decrement = () => {
    counterValue -= 1;

    document.getElementById('value').textContent = counterValue;
};

document
    .querySelector("[data-action='increment']")
    .addEventListener('click', increment);

document
    .querySelector("[data-action='decrement']")
    .addEventListener('click', decrement);
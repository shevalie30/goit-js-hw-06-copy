/*Напиши скрипт который, при наборе текста в инпуте input#name -
input(событие input), подставляет его текущее значение в span#name -
output.Если инпут пустой, в спане должна отображаться строка "Anonymous".*/
"use strict";


const inp = document.querySelector('#name-input');
const title = document.querySelector('#name-output');
inp.addEventListener('input', newInp);
function newInp(a) {
    title.textContent = a.currentTarget.value;
    if (a.currentTarget.value === "") {
        title.textContent = "Anonymous"
    }
};

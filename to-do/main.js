'use strict';

const items = document.querySelector('.lists');
const input = document.querySelector('.input__textbox');
const add = document.querySelector('.input__btn');
const form = document.querySelector('.input__form');
const count = document.querySelector('.list__count');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  onAdd();
});

function onAdd() {
  const text = input.value;
  if (text == '') {
    input.focus();
    return;
  }
}

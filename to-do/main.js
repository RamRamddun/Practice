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
  const item = creatItem(text);
  items.appendChild(item);
  input.value = '';
  input.focus();
}

function creatItem(text) {
  const listRow = document.createElement('li');
  listRow.setAttribute('class', 'list');
  listRow.innerHTML = `
  <div class="items">
  <span>${text}</span>
  <div class="clickContainer">
    <button class="item__checked">
      <i class="fa-solid fa-circle-check check "></i>
    </button>
    <button class="item__delete">
      <i class="fa-solid fa-delete-left delete"> </i>
    </button>
  </div>
</div>`;

  return listRow;
}

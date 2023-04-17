'use strict';

const items = document.querySelector('.lists');
const input = document.querySelector('.input__textbox');
const add = document.querySelector('.input__btn');
const form = document.querySelector('.input__form');
const count = document.querySelector('.list__count');
let total = 0,
  current = 0;

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
  item.scrollIntoView({ block: 'center' });
  input.value = '';
  input.focus();
  total++;
  updateCount();
}

function creatItem(text) {
  const listRow = document.createElement('li');
  listRow.setAttribute('class', 'list');
  listRow.innerHTML = `
  <div class="items">
  <span class="item__main">${text}</span>
  <div class="clickContainer">
    <button class="item__checked">
      <i class="fa-solid fa-circle-check check"></i>
    </button>
    <button class="item__delete">
      <i class="fa-solid fa-delete-left delete"> </i>
    </button>
  </div>
</div>`;
  return listRow;
}

items.addEventListener('click', (e) => {
  const id = e.target.dataset.id;
  if (e.target.classList.contains('check')) {
    const checked = e.target.closest('.items').querySelector('.item__main');
    checked.classList.toggle('strike');
    if (checked.classList.contains('strike')) {
      current++;
    } else {
      current--;
    }
    updateCount();
  }
  if (e.target.classList.contains('delete')) {
    const listDelete = e.target.closest('.list');
    listDelete.remove();
    if (current > 0) {
      current--;
    }
    total--;
    updateCount();
  }
});

function updateCount() {
  count.innerText = `you done ${current} out of ${total} lists`;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const boxes = document.querySelector('#boxes');
let amount = 0;
const numInput = document.querySelector('input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
btnCreate.addEventListener('click', onCreate)
btnDestroy.addEventListener('click', onDestroy)

numInput.addEventListener('change', onChange);
function onChange(event) {
  amount = Number(event.currentTarget.value);
}

function onCreate() {
  createBoxes(amount);
}

function onDestroy() {
  destroyBoxes();
}

function createBoxes(amount) {
  let markup = ''
  let size = 30;
  for (let i = 0; i < amount; i++){
    let color = getRandomHexColor();
    markup += `
    <div style="
    width: ${size}px; 
    height: ${size}px; 
    background-color: ${color};
    font-size: ${size/5}px;
    ">${color}</div>
    `
    size += 10;
  }

  boxes.innerHTML = markup;
}

function destroyBoxes() {
  boxes.innerHTML = '';
  numInput.value = '';
  amount = 0;
}

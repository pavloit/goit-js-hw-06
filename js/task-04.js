let counterValue = 0;
const btnDec = document.querySelector('[data-action="decrement"]');
const btnInc = document.querySelector('[data-action="increment"]');
const spanEl = document.querySelector('span')
btnDec.addEventListener('click', onClick)
btnInc.addEventListener('click', onClick)

function onClick(event) {
    counterValue += Number(event.srcElement.innerHTML);     
    spanEl.innerHTML = counterValue;
}

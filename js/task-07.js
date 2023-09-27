const inputRange = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
inputRange.addEventListener('input', onChange);
function onChange(event) {
    text.style.fontSize = `${event.currentTarget.value}px`;
}
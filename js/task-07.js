const inputRange = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
inputRange.addEventListener('input', onChange);
text.style.fontSize = `${inputRange.value}px`;
function onChange(event) {
    text.style.fontSize = `${event.currentTarget.value}px`;
}
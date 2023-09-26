const nameOutput = document.querySelector('#name-output');
const nameInput = document.querySelector('#name-input');
nameInput.addEventListener('input', onInput);

function onInput(event) {
    const inputValue = event.currentTarget.value;
    if (inputValue) {
        nameOutput.innerHTML = event.currentTarget.value;
     return
    }
    nameOutput.innerHTML = "Anonymous";
}
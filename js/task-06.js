const validationInput = document.querySelector('#validation-input');
validationInput.addEventListener('blur', onBlur)

function onBlur(event) {
    const input = event.currentTarget;
    if (input.value.length == input.dataset.length) {        
        validationInput.classList.remove('invalid');
        validationInput.classList.add('valid');
        return
    }
    validationInput.classList.add('invalid');
}
const form = document.querySelector('.login-form');
form.addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements
    
    if (!email.value || !password.value) {
        alert('Потрібно заповнити всі поля')
        return
    }
    
    const formData = {
        [email.name]: email.value,
        [password.name]: password.value  
    };

    console.log(formData);
    event.currentTarget.reset();
}
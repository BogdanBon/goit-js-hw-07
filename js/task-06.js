const inputToValidate = document.getElementById('validation-input')

function checkInput(text) {
    if (text.currentTarget.value.length < inputToValidate.dataset.length
        || text.currentTarget.value.length > inputToValidate.dataset.length) {
        inputToValidate.classList = 'invalid';
    }else inputToValidate.classList = 'valid';
}

inputToValidate.addEventListener('blur', checkInput);



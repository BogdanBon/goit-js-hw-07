const inputText = document.getElementById('name-input')
let spanText = document.getElementById('name-output')

function addingText(text) {
    if (text.currentTarget.value === '') {
        spanText.textContent = 'незнакомец'
    } else spanText.textContent = text.currentTarget.value;
}

inputText.addEventListener('input', addingText);
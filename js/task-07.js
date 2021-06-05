const inputToCheck = document.getElementById('font-size-control');
const textToChange = document.getElementById('text')

function checkInput() {
    textToChange.style.fontSize = inputToCheck.value + 'px';
}

inputToCheck.addEventListener('input', checkInput)
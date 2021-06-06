const inputToCheck = document.getElementById('font-size-control');
const textToChange = document.getElementById('text');
textToChange.style.fontSize = inputToCheck.value + 'px';


function checkInput() {
    textToChange.style.fontSize = inputToCheck.value + 'px';
}

inputToCheck.addEventListener('input', checkInput);
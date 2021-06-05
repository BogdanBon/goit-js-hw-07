const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const counter = document.querySelector('span#value')

let counterValue = 0;

function increment() {
    counterValue += 1;
    return counter.textContent = counterValue;
};
function decrement() {
    counterValue -=1;
    return counter.textContent = counterValue;
};

btnIncrement.addEventListener('click', increment)
btnDecrement.addEventListener('click', decrement);


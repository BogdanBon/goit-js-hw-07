const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listOfIngredients = document.getElementById('ingredients');

const listedIngredients = [];

ingredients.forEach((ingredient) => {

  const elementIngredient = document.createElement('li');
  elementIngredient.textContent = ingredient;

  listedIngredients.push(elementIngredient);

})

listOfIngredients.append(...listedIngredients)
const cathegories = document.getElementById('categories');

const cathegoriesItems = cathegories.querySelectorAll('.item');

console.dir(`В списке ${cathegoriesItems.length} категории.`);

cathegoriesItems.forEach((el) => {
    
    const titleOfCathegory = el.querySelector('h2');
    console.dir(`Категория: ${titleOfCathegory.textContent}`);

    const numberOfCathegories = el.querySelectorAll('ul > li')
    console.dir(`Количество элементов: ${numberOfCathegories.length}`);

})
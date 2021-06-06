const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.getElementById('gallery');
gallery.style.display = 'flex';
gallery.style.flexDirection = 'column';
gallery.style.listStyle = 'none';

let elements = [];

images.forEach((image) => {
  elements.push(`<li><img src= ${image.url} alt= '${image.alt}' width= 480></li>`);
})

gallery.insertAdjacentHTML('beforeend', [...elements].join(''));


// 2 ----------------------------------------------------
// const listElement = document.createElement('li');

// images.forEach((image) => {
//   listElement.insertAdjacentHTML('beforeend', `<img src= ${image.url} alt= '${image.alt}' width= 480>`
//   );
// })

// gallery.append(listElement)

// 3 ----------------------------------------------------
// const listOfImages = [];

// images.forEach((image) => {
//   const list = document.createElement('li');
//   const myImg = document.createElement('img');
//   myImg.setAttribute('src', image.url);
//   myImg.setAttribute('alt', image.alt);
//   myImg.width = '320';

//   list.append(myImg);

//   listOfImages.push(list);
// })

// gallery.append(...listOfImages)
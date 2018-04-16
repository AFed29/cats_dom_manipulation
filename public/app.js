document.addEventListener('DOMContentLoaded', () => {

  catsCollection = [{
    name: 'Boba',
    favouriteFood: 'Sock fluff',
    image: 'http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg'
  },
  {
    name: 'Barnaby',
    favouriteFood: 'Tuna',
    image: 'https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg'
  },
  {
    name: 'Max',
    favouriteFood: 'Whiskas Temptations',
    image: 'http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg'
  },
  {
    name: 'Derp',
    favouriteFood: 'Cheese',
    image: 'images/cat.jpg'
  }];

  const cats = document.querySelector('#cats');
  cats.innerHTML = '';

  const elementCreator = function (element) {
    return document.createElement(element);
  }

  const addCat = function (catData, container) {

    const name = catData.name;
    const favouriteFood = catData.favouriteFood;
    const image = catData.image;

    const catInfo = elementCreator('ul');

    const catName = elementCreator('li');
    catName.textContent = name;

    const catFavFood = elementCreator('li');
    catFavFood.textContent =favouriteFood;

    const catImageLI= elementCreator('li');
    const catImage = elementCreator('img');
    catImage.src = image;

    cats.appendChild(catInfo);

    container.appendChild(catName);
    container.appendChild(catFavFood);
    container.appendChild(catImageLI);

    catImageLI.appendChild(catImage);
  };

  for (let cat of catsCollection) {
    addCat(cat, cats);
  };

});

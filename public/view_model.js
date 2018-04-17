const elementCreator = function (element) {
  return document.createElement(element);
}

const addCat = function (cat, container) {

  const catInfo = elementCreator('ul');

  const catName = elementCreator('li');
  catName.textContent = cat.name;

  const catFavFood = elementCreator('li');
  catFavFood.textContent = cat.favouriteFood;

  const catImageLI = elementCreator('li');
  const catImage = elementCreator('img');
  catImage.src = cat.imageURL;

  cats.appendChild(catInfo);
  container.appendChild(catName);
  container.appendChild(catFavFood);
  container.appendChild(catImageLI);
  catImageLI.appendChild(catImage);
};

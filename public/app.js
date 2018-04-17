document.addEventListener('DOMContentLoaded', () => {
  const cats = document.querySelector('#cats');
  
  catsCollection.forEach((cat) => addCat(cat, cats));
});

const elProducts = document.getElementById('products');
const elBtn = document.getElementById('btn');
const elMovies = document.getElementById('movies');

let currentIndex = 0;
const itemsPerPage = 5;

function renderItems() {

  for (let i = currentIndex; i < currentIndex + itemsPerPage; i++) {
    if (i >= products.length) {

      elBtn.style.display = 'none';
      break;
    }

    let item = products[i];
    let elItem = document.createElement('li');
    let elItemImg = document.createElement('img');
    let elItemTitle = document.createElement('h5');
    let elRatingDiv = document.createElement('div');
    let elItemRating = document.createElement('span');
    let elComment = document.createElement('span');
    let elCredit = document.createElement('mark');
    let elDiscount = document.createElement('p');
    let elPrice = document.createElement('h5');

    elItemImg.src = item.image;
    elItemTitle.textContent = item.name;
    const maxLength = 45;
    if (elItemTitle.textContent.length > maxLength) {
      elItemTitle.textContent = item.name.slice(0, maxLength) + "...";
    } else {
      elItemTitle.textContent = item.name;
    }

    elItemRating.textContent = "★" + " " + item.rating;
    elComment.textContent = "(" + item.comments + "ta sharhlar" + ")";
    elPrice.textContent = item.price;
    elDiscount.textContent = item.discount + " ";
    elCredit.textContent = item.kredit_form + " so'm/ oyiga";
    elRatingDiv.style.display = "flex";
    elRatingDiv.style.alignItems = "center";

    elProducts.append(elItem);
    elItem.append(elItemImg);
    elItem.append(elItemTitle);
    elItem.append(elRatingDiv);
    elRatingDiv.append(elItemRating);
    elRatingDiv.append(elComment);
    elItem.append(elCredit);
    elItem.append(elDiscount);
    elItem.append(elPrice);
  }


  currentIndex += itemsPerPage;
}

renderItems();

elBtn.addEventListener('click', () => {
  renderItems();
});


movies.forEach((item, index) => {

  let elItem = document.createElement('li');
  let elItemImg = document.createElement('img');
  let elItemTitle = document.createElement('h5');
  let elRatingDiv = document.createElement('div');
  let elItemRating = document.createElement('span');
  let elDirector = document.createElement('span');
  let elYear = document.createElement('mark');
  let elDescription = document.createElement('p');
  let elGanre = document.createElement('h5');

  elItemImg.src = item.poster;
  elItemTitle.textContent = item.title;
  const maxLength = 45;
  if (elItemTitle.textContent.length > maxLength) {
    elItemTitle.textContent = item.title.slice(0, maxLength) + "...";
  } else {
    elItemTitle.textContent = item.title;
  }

  elItemRating.textContent = "★" + " " + item.rating;
  elDirector.textContent = " " + "Directors: " + item.director;
  elGanre.textContent = item.genre;
  elDescription.textContent = item.description;
  const maximum = 50
  if (elDescription.textContent.length > maximum) {
    elDescription.textContent = item.description.slice(0, maximum) + "...";
  } else {
    elDescription.textContent = item.description;
  }
  elYear.textContent = "year: " + item.year;
  elRatingDiv.style.display = "flex";
  elRatingDiv.style.alignItems = "center";
  elRatingDiv.style.gap = "10px"

  elMovies.append(elItem);
  elItem.append(elItemImg);
  elItem.append(elItemTitle);
  elItem.append(elRatingDiv);
  elRatingDiv.append(elItemRating);
  elRatingDiv.append(elDirector);
  elItem.append(elGanre);
  elItem.append(elYear);
  elItem.append(elDescription);

})




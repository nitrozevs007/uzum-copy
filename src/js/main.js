const elProducts = document.getElementById('products');
const elBtn = document.getElementById('btn');

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

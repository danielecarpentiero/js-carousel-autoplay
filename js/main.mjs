const images = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const items = document.querySelector(".items");
const thumbnailsContainer = document.querySelector('.tb-container');
let currentImage = 0;
let itemsAll;

for (let i = 0; i < images.length; i++) {
  const item = document.createElement("div");
  item.classList.add('item');

  const img = document.createElement('img');
  img.src = `img/${images[i]}`;
  img.alt = `01 ${i}`;

  item.append(img);
  items.append(item);

  const thumbnail = document.createElement('div');
  thumbnail.classList.add('tb');

  const thumbnailImg = document.createElement('img');
  thumbnailImg.src = `img/${images[i]}`;
  thumbnailImg.alt = `thumbnail ${i}`;

  thumbnail.append(thumbnailImg);
  thumbnailsContainer.append(thumbnail);

  if (currentImage === i) {
    item.classList.add('active');
    thumbnail.classList.add('active');
  }

  /* Aggiungi evento di click per le miniature */
  thumbnail.addEventListener('click', function () {
    itemsAll[currentImage].classList.remove('active');
    thumbnailsContainer.querySelector('.tb.active').classList.remove('active');
    currentImage = i;
    itemsAll[currentImage].classList.add('active');
    thumbnailsContainer.querySelectorAll('.tb')[currentImage].classList.add('active');
  });
}

/* seleziono tutte le classi che contengono le immagini dopo averle create */
itemsAll = document.querySelectorAll('.item');

/* al click su prev visualizza l'immagine precedente */
prev.addEventListener('click', function () {
  console.log("ho cliccato su prev");
  itemsAll[currentImage].classList.remove('active');
  thumbnailsContainer.querySelector('.tb.active').classList.remove('active');
  currentImage = (currentImage - 1 + itemsAll.length) % itemsAll.length;
  itemsAll[currentImage].classList.add('active');
  thumbnailsContainer.querySelectorAll('.tb')[currentImage].classList.add('active');
});

/* al click su next visualizza l'immagine successiva */
next.addEventListener('click', function () {
  console.log("ho cliccato su next");
  itemsAll[currentImage].classList.remove('active');
  thumbnailsContainer.querySelector('.tb.active').classList.remove('active');
  currentImage = (currentImage + 1) % itemsAll.length;
  itemsAll[currentImage].classList.add('active');
  thumbnailsContainer.querySelectorAll('.tb')[currentImage].classList.add('active');
});

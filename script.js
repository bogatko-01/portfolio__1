var headerBurger = document.querySelector('.header__burger');
headerBurger.addEventListener('click', function () {
	document.querySelector('.header__burger').classList.toggle("active");
	document.querySelector('.header__menu').classList.toggle("active");
	document.body.classList.toggle("lock");
});

var catalog = document.querySelector('.catalog');
catalog.addEventListener('click', function () {
	document.querySelector('.catalog__header__menu').classList.toggle("active");
	document.querySelector('.exit').classList.toggle("exit-active");
	document.body.classList.toggle("lock");
});
var categoryLoad = document.querySelector('.category-load');
categoryLoad.addEventListener('click', function () {
  document.querySelector('.category-menu-hidden').classList.toggle("flex");
  document.querySelector('.category-load-triangle').classList.toggle("category-load-triangle-active");
  var catLoadTxt = document.querySelector('.category-load-text');
  catLoadTxt.innerHTML = (catLoadTxt.innerHTML === 'Скрыть все') ? 'Показать все' : 'Скрыть все'
});


// Card box
var cards = document.querySelectorAll('.card');
for (var i = 0; i < cards.length; i++) {
  var card = cards[i];
  card.addEventListener('mousemove', startRotate);
  card.addEventListener('mouseout', stopRotate);
}

function startRotate(event) {
  var cardItem = this.querySelector('.card-item');
  var halfHeight = cardItem.offsetHeight / 2;
  var halfWidth = cardItem.offsetWidth / 2;
  cardItem.style.transform = 'rotateX(' + - (event.offsetY - halfHeight) / 5 + 'deg) rotateY(' + (event.offsetX - halfWidth) / 5 + 'deg)';
};

function stopRotate(event) {
  var cardItem = this.querySelector('.card-item');
  cardItem.style.transform = 'rotate(0)';
};
// Card box
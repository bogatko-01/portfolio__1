// Каталог продукции  
var buttonOrder = document.querySelector('.button-order');
buttonOrder.addEventListener('click', function () {
	document.querySelector('.menu-order').classList.toggle("show");
	document.querySelector('.arrows').classList.toggle("arrows-up");
});
function menuOrderClick1(){
  document.querySelector('.span-text').innerHTML = "По дате, с новых";
  document.querySelector('.menu-order').classList.toggle("show");
  document.querySelector('.arrows').classList.toggle("arrows-up");

}
function menuOrderClick2(){
  document.querySelector('.span-text').innerHTML = "По дате, со старых";
  document.querySelector('.menu-order').classList.toggle("show");
  document.querySelector('.arrows').classList.toggle("arrows-up");
}
function menuOrderClick3(){
  document.querySelector('.span-text').innerHTML = "По цене, с недорогих";
  document.querySelector('.menu-order').classList.toggle("show");
  document.querySelector('.arrows').classList.toggle("arrows-up");

}
function menuOrderClick4(){
  document.querySelector('.span-text').innerHTML = "По цене, с дорогих";
  document.querySelector('.menu-order').classList.toggle("show");
  document.querySelector('.arrows').classList.toggle("arrows-up");

}
function menuOrderClick5(){
  document.querySelector('.span-text').innerHTML = "По названию";
  document.querySelector('.menu-order').classList.toggle("show");
  document.querySelector('.arrows').classList.toggle("arrows-up");

}
function menuOrderClick6(){
  document.querySelector('.span-text').innerHTML = "По популярности";
  document.querySelector('.menu-order').classList.toggle("show");
  document.querySelector('.arrows').classList.toggle("arrows-up");
}

var range = document.querySelector('.number');
var rangeNumberOne = document.querySelector('.range-number-1');
range.oninput = function () {
	rangeNumberOne.innerHTML = this.value;
};

var rangeTwo = document.querySelector('.number-2');
var rangeNumberTwo = document.querySelector('.range-number-2');
rangeTwo.oninput = function () {
	rangeNumberTwo.innerHTML = this.value;
};


var singlePlayer = document.querySelector('.single-player'),
	 coopPlayer = document.querySelector('.coop-player'),
	 multiPlayer = document.querySelector('.multiplayer'),
	 dost = document.querySelector('.dost'),
	 gamePad = document.querySelector('.gamePad'),
	 collection = document.querySelector('.collection'),
	 mac = document.querySelector('.mac'),
	 virtual = document.querySelector('.virtual'),
	 dlc = document.querySelector('.dlc'),
	 win = document.querySelector('.win');

singlePlayer.addEventListener('click', function () {
	document.querySelector('.single-player').classList.toggle("orange");
});

coopPlayer.addEventListener('click', function () {
	document.querySelector('.coop-player').classList.toggle("orange");
});

multiPlayer.addEventListener('click', function () {
	document.querySelector('.multiplayer').classList.toggle("orange");
});

dost.addEventListener('click', function () {
	document.querySelector('.dost').classList.toggle("orange");
});


gamePad.addEventListener('click', function () {
	document.querySelector('.gamePad').classList.toggle("orange");
});

collection.addEventListener('click', function () {
	document.querySelector('.collection').classList.toggle("orange");
});

virtual.addEventListener('click', function () {
	document.querySelector('.virtual').classList.toggle("orange");
});

dlc.addEventListener('click', function () {
	document.querySelector('.dlc').classList.toggle("orange");
});

win.addEventListener('click', function () {
	document.querySelector('.win').classList.toggle("orange");
});

mac.addEventListener('click', function () {
	document.querySelector('.mac').classList.toggle("orange");
});


// Каталог продукции



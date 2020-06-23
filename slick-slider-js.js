$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:false,
		adaptiveHeight:false,
		slidesToShow:4,
		slidesToScroll:4,
		speed: 1000,
		easing:'ease',
		infinite:true,
		autoplay:true,
		arrows: true,
		responsive: [
			{
			  breakpoint: 769,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				arrows: false,
			  }
			},
			{
				breakpoint: 500,
				settings: {
				  slidesToShow: 2,
				  slidesToScroll: 2,
				  arrows: false,
				}
			  },
		  ],
	});
});	
jQuery(document).ready(function ($) {
	$('.carousel').each(function (key, element) {
		var wrapper = $(element);
		wrapper.slick({
			dots: false,
			arrows: wrapper.data('arrows'),
			infinite: true,
			speed: 500,
			slidesToShow: wrapper.data('items'),
			autoplay: wrapper.data('autoplay'),
			autoplaySpeed: 4000,
			responsive: [{
				breakpoint: 992,
				settings: {
					slidesToShow: wrapper.data('items-sm')
				}
			}, {
				breakpoint: 767,
				settings: {
					slidesToShow: wrapper.data('items-xs')
				}
			}]
		});
	});
	$('a#first').click(function(){
    $('div#popOutContainer').show();
});
$('a#last').click(function(){
    $('div#popOutContainer').hide();
});
});

$( document ).ready(function() {
console.log("Hello world!");

Marquee3k.init();



$('.click-about').click(function() {
	$('.popup-about').addClass('about-item-show');
	$('.popup-about').click(function() {
		$(this).removeClass('about-item-show');
	});
});


});

$( document ).ready(function() {
  Marquee3k.init();
  Marquee3k.refresh(index);
});


$( document ).ready(function() {
// start here    
$('').click(function() {
  $('.issue1').addClass('bottom');
});

$('.close-link').click(function() {
  $('.issue1').removeClass('bottom');
});
	
// popup link 

$('.popup-link').click(function() {
  $('.popup').addClass('active');
});

$('.popup').click(function() {
  $('.popup').removeClass('active');
});

// end here
});

// POPUPS

  // popup link 

$( document ).ready(function() {

// start shape popup
$('.about').click(function() {
  $('.about-box').addClass('show');
});
// end shape popup

// start shape popup
$('.rep').click(function() {
  $('.rep-box').addClass('show');
});
// end shape popup

// start shape popup
$('.bnm').click(function() {
  $('.bnm-box').addClass('show');
});
// end shape popup

// start shape popup
$('.lgbt').click(function() {
  $('.lgbt-box').addClass('show');
});
// end shape popup

// start shape popup
$('.rad').click(function() {
  $('.rad-box').addClass('show');
});
// end shape popup

// start shape popup
$('.geo').click(function() {
  $('.geo-box').addClass('show');
});
// end shape popup

// start shape popup
$('.tg').click(function() {
  $('.tg-box').addClass('show');
});
// end shape popup

// CLOSE ANY OPEN SHAPE
$('.boxes').click(function() {
  $(this).removeClass('show');
});
// CLOSE ANY OPEN SHAPE

});





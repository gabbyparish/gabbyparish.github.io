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
$('.scale').click(function() {
  $('.scale-box').addClass('show');
});
// end shape popup

// start shape popup
$('.language').click(function() {
  $('.language-box').addClass('show');
});
// end shape popup

// start shape popup
$('.dna').click(function() {
  $('.dna-box').addClass('show');
});
// end shape popup

// start shape popup
$('.eye').click(function() {
  $('.eye-box').addClass('show');
});
// end shape popup

// start shape popup
$('.penalty').click(function() {
  $('.penalty-box').addClass('show');
});
// end shape popup

// CLOSE ANY OPEN SHAPE
$('.boxes').click(function() {
  $(this).removeClass('show');
});
// CLOSE ANY OPEN SHAPE

});





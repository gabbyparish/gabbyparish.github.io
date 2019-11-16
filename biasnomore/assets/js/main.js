
$(document).ready(function(){
  console.log("The page is ready!");

  //toggle active class on nav item

  $('.nav-item').click(function(){
    $('.nav-item').removeClass('active')
    $(this).addClass('active');
  });

  var hideAll = function() {
    $('.research-item') .addClass('hide');
  }

  //toggle filtered items

  $('.btn-web').click(function(){
    hideAll(); 
    $('.web').removeClass('hide');
  });

  $('.btn-posters').click(function(){
    hideAll();
    $('.posters').removeClass('hide')
  });

  $('.btn-id').click(function(){
    hideAll();
    $('.id').removeClass('hide')
  });

  $('.btn-print').click(function(){
    hideAll();
    $('.print').removeClass('hide')
  });

  $('.btn-illo').click(function(){
    hideAll();
    $('.illo').removeClass('hide')
  });

  $('.btn-pub').click(function(){
    hideAll();
    $('.pub').removeClass('hide')
  });

  $('.btn-all').click(function(){
    $('.research-item').removeClass('hide');
  });

  

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

});


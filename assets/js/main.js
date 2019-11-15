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

	// VIDEO

	var video = document.getElementById("bg-video");

  // POPUPS

  // popup link 

$( document ).ready(function() {

// start shape popup
$('.about').click(function() {
  $('.about-box').addClass('show');
});
// end shape popup

// start shape popup
$('.btr').click(function() {
  $('.btr-box').addClass('show');
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

// start shape popup
$('.mada').click(function() {
  $('.mada-box').addClass('show');
});
// end shape popup

// start shape popup
$('.fs').click(function() {
  $('.fs-box').addClass('show');
});
// end shape popup

// start shape popup
$('.posca').click(function() {
  $('.posca-box').addClass('show');
});
// end shape popup

// start shape popup
$('.l-10').click(function() {
  $('.i-10').addClass('show');
});
// end shape popup

// start shape popup
$('.l-11').click(function() {
  $('.i-11').addClass('show');
});
// end shape popup

// start shape popup
$('.l-12').click(function() {
  $('.i-12').addClass('show');
});
// end shape popup

// start shape popup
$('.l-13').click(function() {
  $('.i-13').addClass('show');
});
// end shape popup

// start shape popup
$('.l-14').click(function() {
  $('.i-14').addClass('show');
});
// end shape popup

// start shape popup
$('.l-15').click(function() {
  $('.i-15').addClass('show');
});
// end shape popup

// start shape popup
$('.l-16').click(function() {
  $('.i-16').addClass('show');
});
// end shape popup

// start shape popup
$('.l-17').click(function() {
  $('.i-17').addClass('show');
});
// end shape popup

// start shape popup
$('.l-18').click(function() {
  $('.i-18').addClass('show');
});
// end shape popup

// CLOSE ANY OPEN SHAPE
$('.boxes').click(function() {
  $(this).removeClass('show');
});
// CLOSE ANY OPEN SHAPE

});




});
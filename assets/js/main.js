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
$('.l-1').click(function() {
  $('.i-1').addClass('show');
});
// end shape popup

// start shape popup
$('.l-2').click(function() {
  $('.i-2').addClass('show');
});
// end shape popup

// start shape popup
$('.l-3').click(function() {
  $('.i-3').addClass('show');
});
// end shape popup

// start shape popup
$('.l-4').click(function() {
  $('.i-4').addClass('show');
});
// end shape popup

// start shape popup
$('.l-5').click(function() {
  $('.i-5').addClass('show');
});
// end shape popup

// start shape popup
$('.l-6').click(function() {
  $('.i-6').addClass('show');
});
// end shape popup

// start shape popup
$('.l-7').click(function() {
  $('.i-7').addClass('show');
});
// end shape popup

// start shape popup
$('.l-8').click(function() {
  $('.i-8').addClass('show');
});
// end shape popup

// start shape popup
$('.l-9').click(function() {
  $('.i-9').addClass('show');
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
$('.image').click(function() {
  $(this).removeClass('show');
});
// CLOSE ANY OPEN SHAPE

});


});
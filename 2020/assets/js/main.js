$(document).ready(function(){
	console.log("The page is ready!");

	// Toggle large research item

	$('.research-item').click(function(){
		$(this).toggleClass('large')
	});

	//toggle active class on nav item

	$('.nav-item').click(function(){
		$('.nav-item').removeClass('active')
		$(this).addClass('active');
	});

	var hideAll = function() {
		$('.research-item') .addClass('hide');
	}

	//toggle filtered items

	$('.btn-camera').click(function(){
		hideAll(); 
		$('.camera').removeClass('hide');
	});

	$('.btn-luminol').click(function(){
		hideAll();
		$('.luminol').removeClass('hide')
	});

	$('.btn-dna').click(function(){
		hideAll();
		$('.dna').removeClass('hide')
	});

	$('.btn-forarc').click(function(){
		hideAll();
		$('.forarc').removeClass('hide')
	});

	$('.btn-history').click(function(){
		hideAll();
		$('.history').removeClass('hide')
	});

	$('.btn-metadata').click(function(){
		hideAll();
		$('.metadata').removeClass('hide')
	});

	$('.btn-all').click(function(){
		$('.research-item').removeClass('hide');
	});

	// VIDEO

	var video = document.getElementById("bg-video");


});
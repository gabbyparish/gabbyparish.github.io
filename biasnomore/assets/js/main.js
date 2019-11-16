$( document ).ready(function() {
// start here    
	function on() {
	  document.getElementById("opening").style.display = "block";
	}

	function off() {
	  document.getElementById("opening").style.display = "none";
	}

}

$( document ).ready(function() {
var figure = $(".video").hover( hoverVideo, hideVideo );

function hoverVideo(e) {  
    $('video', this).get(0).play(); 
}

function hideVideo(e) {
    $('video', this).get(0).pause(); 
}
}
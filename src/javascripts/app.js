import './modules'

/** to do
		1. timer
		2. numbers meebewegen
		3. timer bij iedere numbers resetten
 **/
 
var currentSlide = 0;
var numberSlides = document.getElementsByClassName('slide').length;

function showSlide(thisSlide) {
	for ( var i=0; i<numberSlides; i++){
		document.getElementsByClassName('slide')[i].style.display = "none";
	}
		document.getElementsByClassName('slide')[thisSlide].style.display = "block";	
}

showSlide(1);

// console.log(document.getElementsByClassName('slide')[0]);

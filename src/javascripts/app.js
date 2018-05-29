import './modules'

var currentSlide = 0;
var numberSlides = document.getElementsByClassName('slide').length;

function showSlide(thisSlide) {
	for ( var i=0; i<numberSlides; i++ ){
		document.getElementsByClassName('slide')[i].style.display = "none";
		document.getElementsByClassName('number')[i].classList.remove("active");
	}
		var slide = document.getElementsByClassName('slide')[thisSlide];
		slide.style.display = "block";
		if(thisSlide == 1) {
			    slide.classList.add("second__slide");
		}
    if(thisSlide == 2 || thisSlide == 3) {
      slide.getElementsByTagName('video')[0].play();
    }
  document.getElementsByClassName('number')[thisSlide].classList.add("active");
		currentSlide++;

	if(currentSlide === numberSlides){ currentSlide = 0};
}

showSlide(0);

var timeDelay = 65000;
var diaTimer = setInterval(function(){ showSlide(currentSlide) }, timeDelay);

for (var i=0;i<numberSlides;i++){
		document.getElementsByClassName('number')[i].addEventListener("click", function(thisnode){
		  currentSlide = thisnode.srcElement.dataset.number;
			showSlide(thisnode.srcElement.dataset.number) // "3"

			/* Reset timer */
			window.clearInterval(diaTimer);
			diaTimer = setInterval(function(){ showSlide(currentSlide) }, timeDelay);
	});
}

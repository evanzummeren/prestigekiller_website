import './modules'

var currentSlide = 0;
var numberSlides = document.getElementsByClassName('slide').length;

function showSlide(thisSlide) {
	for ( var i=0; i<numberSlides; i++){
		document.getElementsByClassName('slide')[i].style.display = "none";
		document.getElementsByClassName('number')[i].classList.remove("active");
	}
		document.getElementsByClassName('slide')[thisSlide].style.display = "block";	
		document.getElementsByClassName('number')[thisSlide].classList.add("active");	
		currentSlide++;

	if(currentSlide === numberSlides){ currentSlide = 0};
}

showSlide(0);

var diaTimer = setInterval(function(){ showSlide(currentSlide) }, 7000);

for (var i=0;i<numberSlides;i++){
		document.getElementsByClassName('number')[i].addEventListener("click", function(thisnode){
			showSlide(thisnode.srcElement.dataset.number) // "3"

			/* Reset timer */
			window.clearInterval(diaTimer);
			diaTimer = setInterval(function(){ showSlide(currentSlide) }, 7000);
	});
}

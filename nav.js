 
 /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */

function openMenu() { 
var x = document.getElementById("portfolioTopnav");

    if (x.className === "topnav") {

      x.className += " responsive";

    } else {

      x.className = "topnav";

    } 
  }



  let currentSlide = 0;

function showSlide(slideIndex) {
    const slides = document.querySelectorAll('.carousel .card');
    if (slideIndex >= slides.length) currentSlide = 0;
    if (slideIndex < 0) currentSlide = slides.length - 1;
    
    slides.forEach(slide => slide.classList.remove('active'));
    slides[currentSlide].classList.add('active');
}

function moveSlide(n) {
    currentSlide += n;
    showSlide(currentSlide);
}

// Initialize the carousel
showSlide(currentSlide);


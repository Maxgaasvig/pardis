 
/* ---- we have this code from a 3rd party client, look in literaturlist ---- */
/*jshint esversion: 6 */

var navSlide = () => {
     var burger = document.querySelector('.burger');
     var nav = document.querySelector('.nav-links');
     var navLinks = document.querySelectorAll('.nav-links li');



     burger.addEventListener('click', () => {
         // Toggle Nav
         nav.classList.toggle('nav-active');

         // Animate Links
         navLinks.forEach((link, index) => {
             if (link.style.animation) {
                 link.style.animation = '';
             } else {
                 link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.9}s`;
                 console.log(index / 7);
             }

         });

         //Burger Animation
         burger.classList.toggle('toggle');

     });

 };
 navSlide();


 var slideIndex = 1;
 showSlides(slideIndex);

 // Next/previous controls
 function plusSlides(n) {
     showSlides(slideIndex += n);
 }

 // Thumbnail image controls
 function currentSlide(n) {
     showSlides(slideIndex = n);
 }

 function showSlides(n) {
     var i;
     var slides = document.getElementsByClassName("mySlides");
     var dots = document.getElementsByClassName("demo");
     var captionText = document.getElementById("caption");
     if (n > slides.length) {
         slideIndex = 1;
     }
     if (n < 1) {
         slideIndex = slides.length;
     }
     for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";
     }
     for (i = 0; i < dots.length; i++) {
         dots[i].className = dots[i].className.replace(" active", "");
     }
     slides[slideIndex - 1].style.display = "block";
     dots[slideIndex - 1].className += " active";
     captionText.innerHTML = dots[slideIndex - 1].alt;
 }
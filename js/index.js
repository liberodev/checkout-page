var slideIndex = 1;
showSlides(slideIndex);

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("imgSlide");
    var dots = document.getElementsByClassName("pagination");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";

    /* removing active class from all dots pagination  */
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    /* adding active class to respective dots pagination  */
    dots[slideIndex - 1].classList.add("active");
}

function currentSlide(n) {
    showSlides((slideIndex = n));
}
let slideIndex = 1;
showSlides(slideIndex);

const continueButton = document.querySelector(".slide-continue-btn");
continueButton.addEventListener("click", function () {
  plusSlides(1);
});

function plusSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  slideIndex += n;

  if (slideIndex > slides.length) {
    window.location.href = "login-page.html";
  } else {
    showSlides(slideIndex);
  }
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

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
}

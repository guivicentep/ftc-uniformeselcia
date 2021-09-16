// Uniformes---------------------------------------------------------------------------------------
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
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
// Mascaras---------------------------------------------------------------------------------------
var slideIndexMascaras = 1;
showSlidesMascaras(slideIndexMascaras);

// Next/previous controls
function plusSlidesMascaras(n) {
  showSlidesMascaras(slideIndexMascaras += n);
}

// Thumbnail image controls
function currentSlideMascaras(n) {
  showSlidesMascaras(slideIndexMascaras = n);
}

function showSlidesMascaras(n) {
  var i;
  var slidesMascaras = document.getElementsByClassName("mySlides-mascaras");
  var dotsMascaras = document.getElementsByClassName("demo-mascaras");
  var captionText = document.getElementById("caption-mascaras");
  if (n > slidesMascaras.length) {slideIndexMascaras = 1}
  if (n < 1) {slideIndexMascaras = slidesMascaras.length}
  for (i = 0; i < slidesMascaras.length; i++) {
    slidesMascaras[i].style.display = "none";
  }
  for (i = 0; i < dotsMascaras.length; i++) {
    dotsMascaras[i].className = dotsMascaras[i].className.replace(" active", "");
  }
  slidesMascaras[slideIndexMascaras-1].style.display = "block";
  dotsMascaras[slideIndexMascaras-1].className += " active";
  captionText.innerHTML = dotsMascaras[slideIndexMascaras-1].alt;
}
// Bordados---------------------------------------------------------------------------------------
var slideIndexBordados = 1;
showSlidesBordados(slideIndexBordados);

// Next/previous controls
function plusSlidesBordados(n) {
  showSlidesBordados(slideIndexBordados += n);
}

// Thumbnail image controls
function currentSlideBordados(n) {
  showSlidesBordados(slideIndexBordados = n);
}

function showSlidesBordados(n) {
  var i;
  var slidesBordados = document.getElementsByClassName("mySlides-bordados");
  var dotsBordados = document.getElementsByClassName("demo-bordados");
  var captionText = document.getElementById("caption-bordados");
  if (n > slidesBordados.length) {slideIndexBordados = 1}
  if (n < 1) {slideIndexBordados = slidesBordados.length}
  for (i = 0; i < slidesBordados.length; i++) {
    slidesBordados[i].style.display = "none";
  }
  for (i = 0; i < dotsBordados.length; i++) {
    dotsBordados[i].className = dotsBordados[i].className.replace(" active", "");
  }
  slidesBordados[slideIndexBordados-1].style.display = "block";
  dotsBordados[slideIndexBordados-1].className += " active";
  captionText.innerHTML = dotsBordados[slideIndexBordados-1].alt;
}
// Jalecos---------------------------------------------------------------------------------------
var slideIndexJalecos = 1;
showSlidesJalecos(slideIndexJalecos);

// Next/previous controls
function plusSlidesJalecos(n) {
  showSlidesJalecos(slideIndexJalecos += n);
}

// Thumbnail image controls
function currentSlideJalecos(n) {
  showSlidesJalecos(slideIndexJalecos = n);
}

function showSlidesJalecos(n) {
  var i;
  var slidesJalecos = document.getElementsByClassName("mySlides-jalecos");
  var dotsJalecos = document.getElementsByClassName("demo-jalecos");
  var captionText = document.getElementById("caption-jalecos");
  if (n > slidesJalecos.length) {slideIndexJalecos = 1}
  if (n < 1) {slideIndexJalecos = slidesJalecos.length}
  for (i = 0; i < slidesJalecos.length; i++) {
    slidesJalecos[i].style.display = "none";
  }
  for (i = 0; i < dotsJalecos.length; i++) {
    dotsJalecos[i].className = dotsJalecos[i].className.replace(" active", "");
  }
  slidesJalecos[slideIndexJalecos-1].style.display = "block";
  dotsJalecos[slideIndexJalecos-1].className += " active";
  captionText.innerHTML = dotsJalecos[slideIndexJalecos-1].alt;
}
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var pontos = document.getElementsByClassName("ponto");
  //slides.length = numero de imagens
  if (n > slides.length){
    slideIndex = 1
  }  //volta ao inicio

  if (n < 1){
    slideIndex = slides.length
  } //permite andar do 1o para o ultimo

  for (i = 0; i < slides.length; i++)
  {
      slides[i].style.display = "none";  
  }/*apenas um slide visivel de cada vez*/

  for (i = 0; i < pontos.length; i++) {
      pontos[i].className = pontos[i].className.replace(" active", "");
  }
  
  slides[slideIndex-1].style.display = "block";  
  pontos[slideIndex-1].className += " active";
}
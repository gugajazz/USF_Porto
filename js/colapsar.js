

var coll = document.getElementsByClassName("caixa_dropdown");
//coll.length = numero de caixas
var i;
for (i = 0; i < coll.length; i++) {

  coll[i].addEventListener("click", 

  function(){ 
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    }
    else {
      content.style.display = "block";
    }
  }
  );
  
} 






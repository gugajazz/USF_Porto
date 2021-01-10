var submit_registar = document.getElementById("submit_registar");

submit_registar.addEventListener("click", function() {
  var form_conta = document.getElementById("form_conta");
  if (form_conta.checkValidity()) {

  
    window.location.href = "registado.html";
    
   
  }
});






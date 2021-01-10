    var submit_login = document.getElementById("submit_login");

    submit_login.addEventListener("click", function() {
      var form_conta = document.getElementById("form_conta");
      if (form_conta.checkValidity()) {

       if (utilizador.value == "exemplo" && palavrapasse.value == "exemplo"){
        window.location.href = "loginsucesso.html";
        }
       else {         
          form_conta.classList.add("invalido");
          form_conta.style.backgroundColor="#FF000022";
          alert("O nome de utilizador ou palavra-passe foram introduzidos incorretamente.");
        }
      }
    });






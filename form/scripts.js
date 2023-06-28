
const form = document.querySelector('#form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const jobSelect = document.querySelector('#job');
const messageTextarea = document.querySelector('#message');

form.addEventListener('submit',(event) =>{
    event.preventDefault();
    // verifica si el campo esta vacio.
    if(nameInput.value=== ""){
        alert("Por favor pon tu nombre");
        return;
    }
    //verificar email
    if(emailInput.value === ""|| !isEmailValid(emailInput.value)){
       alert("por favor pon email.");
       return;
    }
    if(!validatePassword(passwordInput.value, 8 )){
      alert("el password es minimo 8 digitos");
      return ;

    }
    if(jobSelect.value === ""){
      alert("por favor selecciona una opción. ");
      return;
    }
    if(messageTextarea.value === ""){
      alert("por favor deja un mensaje. ");
      return;
    }

//se todos los campos estan correctos, enviar formulario.
 form.submit(); 
});

 
 function isEmailValid(email){
  const emailRegex = new RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/);
  if(emailRegex.test(email)){
      return true;
  }
      return false;
}

//funcion que valida contraseña.

function validatePassword(password, minDigits){
  if(password.length >= minDigits){
    return true;
  }
  return false;
}
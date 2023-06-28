const submitBtn = document.querySelector("#submitBtn");
const form = document.querySelector('#form');
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const asuntoInput = document.querySelector("#asunto");
const mensajeInput = document.querySelector("#mensaje");

nameInput.addEventListener("input", checkFormValidity);
emailInput.addEventListener("input", checkFormValidity);
asuntoInput.addEventListener("input", checkFormValidity);
mensajeInput.addEventListener("input", checkFormValidity);



form.addEventListener('submit',(event)=>{
  event.preventDefault();
  //Validación del Nombre
  if(nameInput.value === ""){
    alert("Por favor pon tu nombre");
    return;
  }else if(nameInput.value.length >= 50){
       alert("El nombre debe tener menos de 50 caracteres");
       return;
  }
  //Validación del email
  if (emailInput.value === "") {
    alert("Por favor pon tu email");
    return;
  }else if(!isEmailValid(emailInput.value)){
    alert("El email no tiene el formato especifico");
    return;
  }

  //Validación del asunto. 
  if (asuntoInput.value === "") {
    alert("Por favor pon el asunto");
    return;
  }else if(asuntoInput.value.length >= 50){
    alert("El asunto debe ser menor a 50 caracteres");
    return;
  }

  //
  if (mensajeInput.value === "") {
    alert("Por favor deja un mensaje, este no debe ir en blanco");
    return;
  }else if(mensajeInput.value.length >=300){
    alert("el Mensaje no debe exceder los 300 caracteres")
    return
  }

form.submit();
});

function isEmailValid(email){
  const emailRegex = new RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/);
  if(emailRegex.test(email)){
      return true;
  }
      return false;
}

function checkFormValidity() {
  if (
    nameInput.value !== "" &&
    /* nameInput.value.length < 50 && */
    /* isEmailValid(emailInput.value) && */
    emailInput.value !== "" &&
    asuntoInput.value !== "" &&
    /* asuntoInput.value.length < 50 && */
    mensajeInput.value !== ""/* &&
     mensajeInput.value.length < 300 */
  ) {
    submitBtn.removeAttribute("disabled");
  } else {
    submitBtn.setAttribute("disabled", "disabled");
  }
}


/*name, email, asunto, mensaje 


boton
El botón enviar solo debe ser activado cuando todos los campos del formulário estén llenos
El botón debe enviar el mensaje.


*/



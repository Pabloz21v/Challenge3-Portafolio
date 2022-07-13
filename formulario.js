
let nombreGuardado = "";
let emailGuardado = "";
let asuntoGuardado = "";
let mensajeGuardado = "";

function validarEspacioBlanco(guardadoBlanco){
    if (guardadoBlanco.length == 0 || guardadoBlanco == " ") {
        return true
    } else {
        return false
    }
   
}
function maximoCincuentaCaracteres(guardadoMaxCinc){
     if (guardadoMaxCinc.length > 50) {
        return true
     } else {
        return false
    }
}
function formatoDeCorreo(guardadoCorreo){
     
}
function maximoTresCientosCaracteres(guardadoMaxTresCient){
    if (guardadoMaxTresCient.length > 300) {
        return true
    }  else {
        return false
    } 
}


function input_nombre(){
    const inputNombre = document.querySelector("#input_nombre")
    nombreGuardado = inputNombre.value
    let validarNombre = validarEspacioBlanco(nombreGuardado)
    let validarMaximo = maximoCincuentaCaracteres(nombreGuardado)
    let elemento = document.querySelector("#error_nombre")
    //elemento.classList.add("contacto__error")
    
    if (validarNombre == true) {
            const avisoError = "Debe completar el espacio"
            elemento.innerHTML = avisoError;
            return false
    } else if  (validarMaximo == true) {
            const avisoError = "No debe superar 50 caracteres"
            elemento.innerHTML = avisoError;
            return false
    } else {
            const avisoError = ""
            elemento.innerHTML = avisoError;
            return true
    }
}

function input_asunto(){
    const inputAsunto = document.querySelector("#input_asunto")
    asuntoGuardado = inputAsunto.value
    let validarAsunto = validarEspacioBlanco(asuntoGuardado)
    let validarMaximo = maximoCincuentaCaracteres(asuntoGuardado)
    let elemento = document.querySelector("#error_asunto")

    if (validarAsunto == true) {
        const avisoError = "Debe completar el espacio"
        elemento.innerHTML = avisoError;
        return false
    } else if  (validarMaximo == true) {
        const avisoError = "No debe superar 50 caracteres"
        elemento.innerHTML = avisoError;
        return false
    } else {
        const avisoError = ""
        elemento.innerHTML = avisoError;
        return true
    }
}

function input_mensaje(){
    const inputMensaje = document.querySelector("#input_mensaje")
    mensajeGuardado = inputMensaje.value
    let validarMensaje = validarEspacioBlanco(mensajeGuardado)
    let validarMaximo = maximoTresCientosCaracteres(mensajeGuardado)
    let elemento = document.querySelector("#error_mensaje")

    if (validarMensaje == true) {
        const avisoError = "Debe completar el espacio"
        elemento.innerHTML = avisoError;
        return false
   } else if  (validarMaximo == true) {
        const avisoError = "No debe superar 300 caracteres"
        elemento.innerHTML = avisoError;
        return false
   } else {
        const avisoError = ""
        elemento.innerHTML = avisoError;
        return true
   }
}


function input_email(){
    const inputEmail = document.querySelector("#input_email")
    emailGuardado = inputEmail.value
    let validarEmail = validarEspacioBlanco(emailGuardado)
    let validarFormato = formatoDeCorreo(emailGuardado)
    let elemento = document.querySelector("#error_email")

    if (validarEmail == true) {
        const avisoError = "Debe completar el espacio"
        elemento.innerHTML = avisoError;
        return false
   } else if  (validarFormato == true) {
        const avisoError = "Debe tener @ y formato de un e-mail"
        elemento.innerHTML = avisoError;
        return false
   } else {
        const avisoError = ""
        elemento.innerHTML = avisoError;
        return true
   }
} 



document.querySelector("#btn-submit")
    .addEventListener("submit", e => {
        
        e.preventDefault()

        if (input_nombre() == true && input_email() == true && input_asunto() == true && input_mensaje() == true) {
            const data = Object.fromEntries(new FormData(e.target)
            //console.log(e), // todo el evento
            //console.log(e.target), //toma toda la estructura html
            //console.log(FormData), // Los objetos FormData le permiten 
            // compilar un conjunto de pares clave/valor para enviar mediante XMLHttpRequest
            //console.log(new FormData(e.target)),
            )
        console.log("exito")
        }
        
        input_nombre()
        input_email()
        input_asunto()
        input_mensaje()

       // console.log(input_nombre())   
       // console.log(input_email())
       // console.log(input_asunto())
       // console.log(input_mensaje())

        //  console.log(data) // clave valor producto de Object.fromEntries
        // console.log(typeof data)
        //console.log(JSON.stringify(data))
        // console.log(typeof (JSON.stringify(data)) )
        //alert(JSON.stringify(data))
    })
    
    //<form action="https://formsubmit.co/d693130c1e93dbd335d609d8ba84a04b" method="POST" 
    // class="contacto__items" id="btn-submit">
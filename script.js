const inputTexto = document.querySelector(".input-texto");
const inputMensaje = document.querySelector(".input-mensaje");
const copia = document.querySelector(".boton-copiar");


function inicioPagina() {
        document.getElementById("inputTextos").focus();
};

function comprobarTexto(){
	let textoInput = document.querySelector(".input-texto").value;
    let comprobador = textoInput.match(/^[a-z]*$/);

    if(textoInput == ""){
        alertaEscriba();
        inicioPagina();
        return true;
    }

    if(!comprobador || comprobador === 0) {
        alertaMayus();
        inputTexto.value = "";
        inicioPagina();
        return true;
    }
}

function botonEncriptar(){
    if(!comprobarTexto()) {
        const textoMensaje = encriptar(inputTexto.value)
        inputMensaje.value = textoMensaje
        inputMensaje.style.backgroundImage = "none"
        inputTexto.value = "";
    }
}

function encriptar(textoEncriptado){
    let codigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoEncriptado = textoEncriptado.toLowerCase()

    for(let i = 0; i < codigo.length; i++){
        if(textoEncriptado.includes(codigo[i][0])){
            textoEncriptado = textoEncriptado.replaceAll(codigo[i][0], codigo[i][1])

        }

    }
    return textoEncriptado
}

function botonDesencriptar(){
    if(!comprobarTexto()) {
    const textoMensaje = desencriptar(inputTexto.value)
    inputMensaje.value = textoMensaje
    inputMensaje.style.backgroundImage = "none"
    inputTexto.value = "";
    }
}


function desencriptar(textoDesencriptada){
    let codigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoDesencriptada = textoDesencriptada.toLowerCase()

    for(let i = 0; i < codigo.length; i++){
        if(textoDesencriptada.includes(codigo[i][1])){
            textoDesencriptada = textoDesencriptada.replaceAll(codigo[i][1] , codigo[i][0])

        }

    }
    return textoDesencriptada
}


function botonCopiar(){
    let textoCopiado = document.querySelector(".input-mensaje").value;

    if(textoCopiado == ""){
        alertaCopiar();
        inicioPagina();
    }
    else{
        inputMensaje.select();
        navigator.clipboard.writeText(inputMensaje.value)
        alertaCopiado();
        inicioPagina();
    }   
}

function botonBorrar(){
    inputMensaje.value = "";
    inputMensaje.style.backgroundImage = "";
    inicioPagina();
}

function mostrarTexto(texto) {
    document.getElementById("icono-texto").textContent = texto;
}

function ocultarTexto() {
    document.getElementById("icono-texto").textContent = "";
}

function alertaMayus() {
    var alerta = document.createElement("div");
    alerta.className = "alerta-personalizada";
    alerta.innerHTML = "No se permiten mayúsculas ni tildes";

    document.body.appendChild(alerta);

    setTimeout(function() {
        alerta.style.display = "none";
    }, 3000);
}

function alertaCopiar() {
    var alerta = document.createElement("div");
    alerta.className = "alerta-personalizada";
    alerta.innerHTML = "No hay elementos para copiar";

    document.body.appendChild(alerta);

    setTimeout(function() {
        alerta.style.display = "none";
    }, 3000);
}

function alertaCopiado() {
    var alerta = document.createElement("div");
    alerta.className = "alerta-personalizada";
    alerta.innerHTML = "Elemento copiado";

    document.body.appendChild(alerta);

    setTimeout(function() {
        alerta.style.display = "none";
    }, 3000);
}

function alertaEscriba() {
    var alerta = document.createElement("div");
    alerta.className = "alerta-personalizada";
    alerta.innerHTML = "Escriba un texto";

    document.body.appendChild(alerta);

    setTimeout(function() {
        alerta.style.display = "none";
    }, 3000);
}
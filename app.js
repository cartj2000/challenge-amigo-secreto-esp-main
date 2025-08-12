// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function limpiarCampoDeEntrada() {
document.querySelector("#amigo").value = "";
}

function agregarAmigo(nombre) {
    let nombre = document.getElementById("amigo").value;
    if (nombre.trim() == "") {
        alert("Por favor, inserte un nombre.");
    } else {
        amigos.push(nombre);
        limpiarCampoDeEntrada();
    }
}

function asignarTextoAElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.textContent = texto;
return;
}
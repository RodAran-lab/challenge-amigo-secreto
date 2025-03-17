// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const ingresoAmigo = document.getElementById("amigo");
const lista = document.getElementById("listaAmigos");
const li = document.createElement("li")
const amigos = [];
const sorteo = document.getElementById("resultado");

function agregarAmigo() {
    if (!ingresoAmigo.value) {
        alert("Ingrese un nombre valido");
    } else {
        amigos.push(ingresoAmigo.value);
        lista.innerHTML += `<li>${ingresoAmigo.value}</li>`;
    }
    ingresoAmigo.value = " ";
};

function sortearAmigo() {
    const azar = Math.floor(Math.random() * amigos.length);
    console.log(Math.floor(Math.random() * amigos.length))
    const amigoSecreto = amigos[azar];
    sorteo.innerHTML = `<li>${amigoSecreto}</li>`;
    lista.innerHTML = " ";
};





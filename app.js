// El principal objetivo de este desafío es fortalecer tus habilidades
//  en lógica de programación. Aquí deberás desarrollar 
// la lógica para resolver el problema.
let nombres = [];

function agregarNombre() {
    let input = document.getElementById("amigo"); // adaptado al id "amigo"
    let nombre = input.value.trim();
    if (nombre === "") {
        alert("Ingrese un nombre");
        return;
    }
    nombres.push(nombre);
    let lista = document.getElementById("listaAmigos");
    let elemento = document.createElement("li");
    elemento.textContent = nombre;
    lista.appendChild(elemento);
    input.value = "";
}

function sorteo() {
    if (nombres.length === 0) {
        alert("Debe ingresar al menos un nombre para sortear");
        return;
    }
    let indiceGanador = Math.floor(Math.random() * nombres.length);
    let ganador = nombres[indiceGanador];

    // Mostrar el resultado en forma de lista
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiar resultados anteriores
    let resultadoElemento = document.createElement("li");
    resultadoElemento.textContent = `El amigo secreto sorteado es: ${ganador}`;
    resultado.appendChild(resultadoElemento);

    // Limpiar la lista de nombres
    document.getElementById("listaAmigos").innerHTML = "";
    nombres = [];
}

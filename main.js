// 1 y 2
const btn = document.getElementById('boton');
const original = btn.textContent;

document.getElementById('boton').addEventListener('mouseover', function() {
    btn.textContent = "salí de encima mío";
});
 
document.getElementById("boton").addEventListener('mouseout', function() {
    btn.textContent = original;
});

// 3

const input = document.getElementById("input");

input.addEventListener("keydown", function(event) {
    console.log("Tecla presionada: " + event.key);
});

// 4
const lista = document.getElementById("lista");

lista.addEventListener("click", function(event) {
    if (event.target.tagName === "li") {
        alert("Hiciste clic en: " + event.target.innerText);
    }
});

// 5
const formulario = document.getElementById("esto es el formulario");
const mensajeFormulario = document.getElementById("el mensaje del formulario");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    mensajeFormulario.textContent = "¡Formulario enviado con éxito!";
});
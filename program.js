// Relacionar elementos del HTML con JavaScript
let miTexto = document.getElementById('Text1'); 
let miBoton = document.getElementById('boton1'); 
let resultado = document.getElementById('resultado');
let contador = document.getElementById('contador');

// Agregar evento al botón
miBoton.addEventListener('click', function(){
    miBoton.style.backgroundColor = 'red'; // Cambiar el color del botón

    // Obtener el texto ingresado y contar caracteres
    let textoIngresado = miTexto.value.toUpperCase(); // Convertir a mayúsculas
    let cantidadCaracteres = textoIngresado.length;
    alert('La cantidad de caracteres es: ' + cantidadCaracteres);

    // Llamar a la función para generar el conteo de letras
    generarAbc(textoIngresado);
});

// Función para contar las repeticiones de cada letra en el texto
function generarAbc(texto) {
    let abecedario = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Letras base
    let conteoLetras = {}; // Objeto para contar las repeticiones de cada letra
    let resultadoHTML = "";

    // Inicializar el objeto con cada letra en 0
    for (let letra of abecedario) {
        conteoLetras[letra] = 0;
    }

    // Contar las repeticiones de cada letra en el texto ingresado
    for (let letra of texto) {
        if (abecedario.includes(letra)) {
            conteoLetras[letra]++; // Aumentar la cuenta si es una letra válida
        }
    }

    // Generar el texto con las repeticiones encontradas
    for (let letra in conteoLetras) {
        if (conteoLetras[letra] > 0) {
            resultadoHTML += `${letra}: ${conteoLetras[letra]}<br>`;
        }
    }

    // Mostrar el conteo de letras en el HTML
    resultado.innerHTML = resultadoHTML;
    
    // Mostrar la cantidad total de letras ingresadas
    contador.textContent = `Se ingresaron ${texto.length} caracteres en total.`;
}


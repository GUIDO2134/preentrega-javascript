//alert()
/* variables
    let
    const

    condicionales
    if
    swich

    ciclos
    for
    while

    funciones
       funciones propias de java
       funciuones cradas pro nosotros
*/
// Generar un número aleatorio entre 1 y 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

// Función para comparar el número ingresado por el jugador con el número secreto
function adivinarNumero() {
  // Obtener el número ingresado por el jugador
  const numeroIngresado = parseInt(prompt("Adivina el número (entre 1 y 100):"));

  // Verificar si el número ingresado es válido
  if (isNaN(numeroIngresado)) {
    alert("Por favor, ingresa un número válido.");
    return;
  }

  // Incrementar el contador de intentos
  intentos++;

  // Verificar si el jugador adivinó el número
  if (numeroIngresado === numeroSecreto) {
    alert(`¡Felicidades! Adivinaste el número en ${intentos} intentos.`);
  } else if (numeroIngresado < numeroSecreto) {
    alert("El número secreto es mayor. Intenta nuevamente.");
    adivinarNumero();
  } else {
    alert("El número secreto es menor. Intenta nuevamente.");
    adivinarNumero();
  }
}
// Iniciar el juego
adivinarNumero();
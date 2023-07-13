//alert()
/* variables
    let ESTA
    const ESTA

    condicionales
    if ESTA
    swich

    ciclos ESTA
    for
    while ESTA

    funciones
       funciones propias de java ESTA
       funciuones cradas pro nosotros ESTA
*/
// Generar un número aleatorio entre 1 y 100
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
// Función principal del juego
function jugarAdivinanza() {
  let intentos = 0;
  let numeroUsuario = 0;

  while (numeroUsuario !== numeroAleatorio) {
    numeroUsuario = parseInt(prompt("Adivina el número (entre 1 y 100):"));

    if (isNaN(numeroUsuario)) {
      alert("Ingresa un número válido.");
    } else {
      intentos++;
      if (numeroUsuario < numeroAleatorio) {
        alert("El número es mayor. Intenta nuevamente.");
      } else if (numeroUsuario > numeroAleatorio) {
        alert("El número es menor. Intenta nuevamente.");
      } else {
        alert(`¡Felicidades! Adivinaste el número en ${intentos} intentos.`);
      }
    }
  }
}
function comenzar(){
// Llamar a la función para iniciar el juego
jugarAdivinanza();
}
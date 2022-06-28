/*******
                Ejercicio 10 - Crea una web basada en el ejercicio de adivinar el número de la práctica de control de flujo while. El juego empezará cuando se haga clic en uno de los 3 botones de nivel. Solo en una funcion. Haz algo parecido a esto:
            *******/
//Funcion sin parametros primero
// function adivinarNoParam() {
//   let ale = parseInt(Math.random() * 10 + 1); //random del 1 al 10
//   let num = prompt("Inserta un numero entre el 1 y el 10");
//   let contador = 1;
//   while (ale != num) {
//     if (ale < num) {
//       num = prompt("El numero que buscamos es mas pequeño. Llevas " + contador + " intentos");
//     } else {
//       num = prompt("El numero que buscamos es mas grande. Llevas " + contador + " intentos");
//     }
//     contador++;
//   }
//   alert("El numero era el " + ale + " y has acertado en " + contador + " intentos!!");
// }
// adivinarNoParam();

//Funcion con parametros
let nombre = prompt("Como te llamas?");
function adivinar(nivel) {
  let ale = parseInt(Math.random() * nivel + 1); //random del 1 al nivel
  let num = prompt("Inserta un numero entre el 1 y el " + nivel);
  let contador = 1;
  while (ale != num) {
    if (ale < num) {
      num = prompt(
        "El numero que buscamos es mas pequeño. Llevas " +
          contador +
          " intentos"
      );
    } else {
      num = prompt(
        "El numero que buscamos es mas grande. Llevas " + contador + " intentos"
      );
    }
    contador++;
  }
  alert(
    "El numero era el " + ale + " y has acertado en " + contador + " intentos!!"
  );
}

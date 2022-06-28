const botones = document.querySelectorAll(".btn5");
const colores = document.getElementById("color");
botones[0].addEventListener("click", () => {
  cambiar("Rojo", "red");
});
botones[1].addEventListener("click", () => {
  cambiar("Azul", "blue");
});
botones[2].addEventListener("click", () => {
  cambiar("Rosa", "pink");
});

function cambiar(texto, color) {
  colores.innerHTML = texto;
  colores.style.backgroundColor = color;
}

const miniatura = document.querySelectorAll(".miniatura");
const grande = document.querySelector(".grande");
miniatura[0].addEventListener("click", () => {
  cambiarImagen();
});

miniatura[1].addEventListener("click", () => {
  cambiarImagen2();
});

function cambiarImagen() {
  grande.src = miniatura[0].src;
}

function cambiarImagen2() {
  grande.src = miniatura[1].src;
}

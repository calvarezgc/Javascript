//Const DOM
const slide = document.querySelectorAll(".slide");
const right = document.querySelector(".right");
const left = document.querySelector(".left");
const paginacio = document.querySelectorAll(".paginacio > div");
const header = document.querySelector("header");

let num = 0;

//Events
right.addEventListener("click", () => {
  dreta();
});

left.addEventListener("click", () => {
  esquerra();
});

for (let i = 0; i < paginacio.length; i++) {
  paginacio[i].addEventListener("click", () => {
    pag(i);
  });
}

amagar();
mostrar();

function pag(n) {
  num = n;
  amagar();
  mostrar();
}

function amagar() {
  for (let i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
    paginacio[i].style.backgroundColor = "rgba(235, 131, 26, 0.637)";
  }
}

function mostrar() {
  slide[num].style.display = "block";
  paginacio[num].style.backgroundColor = "orange";
}

function dreta() {
  amagar();
  num++;
  if (num == slide.length) {
    num = 0;
  }
  mostrar();
}

function esquerra() {
  amagar();
  num--;
  if (num < 0) {
    num = slide.length - 1;
  }
  mostrar();
}

let auto = setInterval(dreta, 5000);

header.addEventListener("mouseenter", () => {
  clearInterval(auto);
});
header.addEventListener("mouseleave", () => {
  auto = setInterval(dreta, 5000);
});

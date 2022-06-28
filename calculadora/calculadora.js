//DOM
const clic = new Audio("calculadora.mp3");
const sonidoIgual = new Audio("igual.mp3");
const number = document.querySelectorAll(".number");
const pantalla = document.getElementById("pantalla");
const suma = document.querySelector(".suma");
const multiplica = document.querySelector(".multiplica");
const resta = document.querySelector(".resta");
const divideix = document.querySelector(".divideix");
const clear = document.querySelector(".clear");
const signe = document.querySelector(".signe");
const coma = document.querySelector(".coma");
const igual = document.querySelector(".igual");
const close = document.getElementById("close");
const calculadora = document.getElementById("calculadora");

//Events
close.addEventListener("click", () => {
  calculadora.style.display = "none";
});
number.forEach((element, i) => {
  element.addEventListener("click", () => calc(i));
});
igual.addEventListener("click", () => {
  iguala();
});
suma.addEventListener("click", () => {
  sumar("suma");
});
multiplica.addEventListener("click", () => {
  multiplicar("multiplica");
});
resta.addEventListener("click", () => {
  restar("resta");
});
divideix.addEventListener("click", () => {
  dividir("divideix");
});
clear.addEventListener("click", () => {
  limpiar();
});
signe.addEventListener("click", () => {
  signes();
});
coma.addEventListener("click", () => {
  decimal();
});

//Open Calc
function abreCalculadora() {
  calculadora.style.display = "block";
  limpiar();
}

//Bindings Variables

let digit = "";
let memoria = 0;
let operacio;

//Functions
function calc(num) {
  // Aquesta és la funció més important
  clic.play();
  pantalla.value = digit + num;
  digit = pantalla.value;
  //Fem servir la variable digit per enmagatzemar els números
}
function decimal() {
  //El punt decilama
  clic.play();
  if (digit == "") {
    //Si no hi ha res a la pantalla 0.
    digit = "0.";
    pantalla.value = digit;
  } else if (digit.indexOf(".") == -1) {
    //Si no hi ha punt a la pantalla posa punt
    pantalla.value = digit + ".";
  }
  // Si troba un punt no farà res
  digit = pantalla.value;
}
function iguala() {
  // sonidoIgual.play();
  //Quina operació es fa?
  switch (operacio) {
    case "suma":
      memoria += Number(digit);
      break;
    case "resta":
      memoria -= Number(digit);
      break;
    case "multiplica":
      memoria *= Number(digit);
      break;
    case "divideix":
      memoria /= Number(digit);
      break;
  }
  pantalla.value = memoria;
  digit = "";
}
function sumar(op) {
  clic.play();
  operacio = op;
  memoria += Number(digit); //Al fer clic a la + el dígit es guarda a la memoria
  pantalla.value = memoria;
  digit = ""; //Reset a dígit per poder escriure un altre número a pantalla
}
//
function multiplicar(op) {
  clic.play();
  if (memoria == 0) {
    memoria = 1;
  }
  if (digit == "") {
    digit = 1;
  }
  operacio = op;
  memoria *= Number(digit);
  pantalla.value = memoria;
  digit = "";
}
function restar(op) {
  clic.play();
  operacio = op;
  if (memoria == 0) {
    memoria = Number(digit);
  } else {
    memoria -= Number(digit);
  }
  pantalla.value = memoria;
  digit = "";
}
function dividir(op) {
  //No està fet
  clic.play();
  operacio = op;
}

function limpiar() {
  //Fem un reset
  clic.play();
  memoria = 0;
  pantalla.value = 0;
  digit = "";
}
function signes() {
  memoria += Number(digit);
  memoria *= -1;
  pantalla.value = memoria;
  digit = "";
}

let juego = [
  {
    img: "&#129308;",
    nom: "Pedra",
  },
  {
    img: "&#9995;",
    nom: "Paper",
  },
  {
    img: "&#9996;",
    nom: "Tisores",
  },
];
const eleccio = document.querySelectorAll(".botones span");
const marcadorPlayer = document.getElementById("marcadorPlayer");
const marcadorPC = document.getElementById("marcadorPC");
const resultat = document.getElementById("resultat");
let pc;
let puntsPlayer = 0;
let puntsPC = 0;
marcador();
let winner; // Serà true si guanya l'usuari

//Esdeveniments
for (let i = 0; i < juego.length; i++) {
  eleccio[i].addEventListener("click", () => {
    jugada(i);
  });
}

function jugada(play) {
  pc = parseInt(Math.random() * 3);
  switch (true) {
    case play == pc:
      winner = null;
      resultat.insertAdjacentHTML(
        "beforeend",
        `<li>Empate ${(juego[play].nom, juego[play].img)}`
      );
      break;
    case play == 0 && pc == 1:
      winner = false;
      break;
    case play == 0 && pc == 2:
      winner = true;
      break;
    case play == 1 && pc == 0:
      winner = true;
      break;
    case play == 1 && pc == 2:
      winner = false;
      break;
    case play == 2 && pc == 0:
      winner = false;
      break;
    case play == 2 && pc == 1:
      winner = true;
      break;
  }
  if (winner) {
    puntsPlayer++;
    resultat.insertAdjacentHTML(
      "beforeend",
      `<li>Player Wins! ha triat ${juego[play].nom} ${juego[play].img} i PC ${juego[pc].nom} ${juego[pc].img}</li>`
    );
  }
  if (winner == false) {
    puntsPC++;
    resultat.insertAdjacentHTML(
      "beforeend",
      `<li>Player Lose! ha triat ${juego[play].nom} ${juego[play].img}i PC ${juego[pc].nom} ${juego[pc].img}</li>`
    );
  }

  marcador();
  if (puntsPlayer + puntsPC == 5 || puntsPlayer == 3 || puntsPC == 3) {
    ganar();
  }
}

function marcador() {
  marcadorPlayer.innerHTML = puntsPlayer;
  marcadorPC.innerHTML = puntsPC;
}

function ganar() {
  if (puntsPlayer > puntsPC) {
    resultat.insertAdjacentHTML(
      "beforeend",
      `<li><strong>Player Wins ${puntsPlayer} - ${puntsPC}</strong></li>`
    );
  } else {
    resultat.insertAdjacentHTML(
      "beforeend",
      `<li><strong>PC Wins ${puntsPC} - ${puntsPlayer}</li></strong>`
    );
  }
  puntsPlayer = 0;
  puntsPC = 0;
}

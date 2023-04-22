const juego =
  [0, 0, 0,
    0, 0, 0,
    0, 0, 0];
let i = 0;
let jugador = 1;

function ganador() {
  const res1 = juego[0] + juego[1] + juego[2];
  const res2 = juego[3] + juego[4] + juego[5];
  const res3 = juego[6] + juego[7] + juego[8];
  const res4 = juego[0] + juego[3] + juego[6];
  const res5 = juego[1] + juego[4] + juego[7];
  const res6 = juego[2] + juego[5] + juego[8];
  const res7 = juego[0] + juego[4] + juego[8];
  const res8 = juego[2] + juego[4] + juego[6];

  if (res1 == 3 || res1 == 15) {
    if (res1 == 3) {
      finJuego("X");
    } else {
      finJuego("O");
    }
  } else if (res2 == 3 || res2 == 15) {
    if (res2 == 3) {
      finJuego("X");
    } else {
      finJuego("O");
    }
  } else if (res3 == 3 || res3 == 15) {
    if (res3 == 3) {
      finJuego("X");
    } else {
      finJuego("O");
    }
  } else if (res4 == 3 || res4 == 15) {
    if (res4 == 3) {
      finJuego("X");
    } else {
      finJuego("O");
    }
  } else if (res5 == 3 || res5 == 15) {
    if (res5 == 3) {
      finJuego("X");
    } else {
      finJuego("O");
    }
  } else if (res6 == 3 || res6 == 15) {
    if (res6 == 3) {
      finJuego("X");
    } else {
      finJuego("O");
    }
  } else if (res7 == 3 || res7 == 15) {
    if (res7 == 3) {
      finJuego("X");
    } else {
      finJuego("O");
    }
  } else if (res8 == 3 || res8 == 15) {
    if (res8 == 3) {
      finJuego("X");
    } else {
      finJuego("O");
    }
  }else if(i==9){
    finJuego(9)
  }
}

function finJuego(n) {
  const modaly = document.getElementById("mod");

  const turno = document.getElementById("turno1");
  if(n==9){
    turno.textContent = "Empate ";
  }else{
  turno.textContent = "Ganador " + n;
}
    modaly.style.display="block";

}
function reiniciar(){
  location.reload();
}

function obtener(numero) {
  themeChange();
  const n = Math.floor(numero)
  const turno = document.getElementById("turno");
  const elemento = document.getElementById("c" + numero);
  const titulo = document.getElementById(numero);
  elemento.onclick = "";
  elemento.classList.remove("cuadro");
  elemento.classList.add("x");
  titulo.textContent = (jugador == 2) ? "O" : "X";
  juego[n - 1] = (jugador == 1) ? 1 : 5;
  jugador = (jugador == 1) ? 2 : 1;
  turno.textContent = "(" + ((jugador == 2) ? "O" : "X") + ")";
  i = i + 1
  ganador();
}

function themeChange() {
  const bod = document.getElementById("Theme").classList.toggle("bodyTheme");
}


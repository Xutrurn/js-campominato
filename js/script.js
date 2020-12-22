// alert("Hello world");

// Esercizio di oggi: campo minato
// repo/cartella:  js-campominato
// Descrizione
// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50


var numeriRandom = [];
var numeriUtente = [];
var possibilita = 100 - 16;
var punteggio = 0;

function generaRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


while (numeriRandom.length < 16) {
  var numero = generaRandom(1, 100);
  if (numeriRandom.includes(numero) == false) {
    numeriRandom.push(numero);
  }
}

console.log(numeriRandom);

for (var i = 0; i <= possibilita; i++) {
  puntataUtente = parseInt(prompt("inserisci numero"));
  if (numeriRandom.includes(puntataUtente) == true) {
    console.log("Bomba colpita, game over");
    break;
  } else if (numeriUtente.includes(puntataUtente) == true) {
    console.log("Numero già usato, riprova");
  } else {
    numeriUtente.push(puntataUtente);
  }
  punteggio++;
}

console.log("il tuo punteggio è : ", punteggio);




// console.log();

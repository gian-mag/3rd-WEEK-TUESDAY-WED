//stringa di partenza

var x = new String("Questa è la mia stringa di partenza");
let Upper = x.toUpperCase();
let Down = x.toLowerCase();
console.log(Upper);
console.log(Down);

// estrapolazione
let estrapola = x.substring(9, 15);
console.log(estrapola);
let estrapola2 = x.slice(16, 23);
console.log(estrapola2);

// concatenazione
const okay = estrapola.concat(" " + estrapola2);
console.log(okay);

// Array di persone
var Arreih = [
    "Sir Andrea Adiener",
    "Lazza-Retti",
    "TommyFrog",
    "Footer Man",
    "Daniel-san"
];
var Follower = Arreih [2];
console.log(Follower);
console.log(Arreih);
Arreih.push("Ruben");
let Abbonati = Arreih.length;
console.log(Abbonati);

// funzioni di array
function lancio() {
    var dado1 = Math.round(Math.random() * 5 + 1);
    return dado1;
}
var dado = lancio();
console.log(`Hai lanciato un dad e hai ottenuto ${dado}`);
   
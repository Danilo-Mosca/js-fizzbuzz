// Utlizzo la direttiva "use strict" per far eseguire il codice in maniera rigorosa
"use strict";
// Ripulisco la console
console.clear();

/*
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi "Buzz".
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz. */

//creo e dichiaro le variabili
const numeri = 100;

// Uso un ciclo for per controllare tutti i numeri
for (let i = 1; i <= numeri; i++) {

    // Controllo prima se "i" è multiplo sia di 3 che di 5
    if ((i % 3 === 0) && (i % 5 === 0)) {
        // Se la condizione è vera per i numeri multipli sia di 3 che di 5 stampo a schermo FizzBuzz
        console.log("FizzBuzz");
    }
    // Altrimenti controllo se i è multiplo di 3
    else if (i % 3 === 0) {
        // Se la condizione è vera per i numeri multipli di 3 stampo a schermo “Fizz”
        console.log("Fizz");
    }
    //Se nessuna delle due condizioni precedenti è vera allora controllo se i è multiplo di 5
    else if (i % 5 === 0) {
        // Se la condizione è vera per i numeri multipli di 5 stampo a schermo Buzz
        console.log("Buzz");
    }
    // Se nessuna delle tre condizioni è vera allora stampo a schermo tutti i numeri ne multipli di 3, ne di 5 e ne multipli di 3 e 5
    else {
        // Stampo a schermo tutti i numeri fino a 100 non multipli di 3, 5 ne 3 e 5
        console.log(i);
    }

}
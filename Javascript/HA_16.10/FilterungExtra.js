//1. 

let rndmnmbr = Array.form({ length: 20 }, () => Math.floor(Math.random() * 100) + 1);
console.log("Zufällige Zahl: ", rndmnmbr);

//2.

let nmbr = rndmnmbr.filter(zahl => zahl % 2 == 0);
console.log("Gerade Zahlen: ", nmbr);

//3. 

let summe = nmbr.reduce((summe,zahl) => summe + zahl,0);
console.log("Summe aller gefilterten, geraden Zahlen: ", summe);
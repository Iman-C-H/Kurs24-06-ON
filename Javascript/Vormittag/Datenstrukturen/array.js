// Wie haben wir bisher Arrays angelegt? 

// Ein leeres Array 
const leeresArray = [];

// Ein einfaches Zahlen-Array 
// Array hat eine Laenge von 5
// Indizes: 0 - 4
const zahlenArray = [1, 2, 3, 4, 5]

// Ein einfaches String-Array 
const namen = ["ahmet", "brian", "steven", "ivonne"];

console.log(namen[0]); // ahmet
console.log(namen[1]); // brian
console.log(zahlenArray[3]); // 4

// Befüllen von Arrays
namen.push("marcel");
zahlenArray.push(6);
leeresArray.push("Hund");
namen.push("iman", "jeffrey", "rudi", "markus", "katharina")
console.log(namen);
console.log(zahlenArray);
console.log(leeresArray);

// Entfernen des letzten Elements aus dem Array
// Das letzte Element eines arrays muss nicht angegeben werden!
//namen.pop ("katharina");
namen.pop;

//zahlenArray.pop(6);  //.pop() löscht den letzten eintrag im Array mit (6) definiert man.
zahlenArray.pop();

//leeresArray.pop("Hund");
leeresArray.pop();

console.log(namen);
console.log(zahlenArray);
console.log(leeresArray);
 /*
// Splice kann Elemente in einem array entfernen.
// Es muessen immer Start- und Endwerte angegeben werden.
// namen.splice(0,1);
// console.log(namen);

//Unshift fuegt Elemente an den Anfang eines Arrays hinzu.
namen.unshift("alper", "stefan", "patrick");
console.log(namen);

//Shift
// Shift entfernt immer das erste Element aus einem array
namen.shift();
console.log(namen);

//Callbacks
// Soll die Elemente eines Arrays einzeln ausgeben.
namen.forEach(namen => {
    console.log(namen);
});
*/
// Manipulation
let slicedNamen = namen.slice(2, 5);
console.log(slicedNamen);











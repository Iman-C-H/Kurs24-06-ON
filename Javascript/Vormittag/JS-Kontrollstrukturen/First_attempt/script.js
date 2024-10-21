console.log("JavaScript läuft!");

var zahl = 25; 


let text = "Hallo Welt";  


const istWahr = true;  

console.log(zahl);  // Number//
console.log(text);  //String//
console.log(istWahr);  //Boolean//

let arrayVar = [1, 2, 3, 4, 5]; //Array//
console.log("Array (let):",arrayVar);


const objectVar = { name: "Iman", age: 31}; //Object//
console.log("Object (const):", objectVar);


let nummer1 = 7;
let nummer2 = "7"; //keine Zahl mehr wegen ""//


//Vergleich mit == u. ===//

let lose = (nummer1 == nummer2);
console.log ("Ergebnis mit == loser Gleichheit:", lose);

let strikt = (nummer1 === nummer2);
console.log ("Ergebnis mit === Strikter Gleichheit:", strikt)

//der Score//
let score = 50;

if (score >= 85) {
    console.log("Ausgezeichnet");
} else if (score >=65) {
    console.log("Gut hemacht");
}else {
    console.log("Mehr Übung erforderlich");
}

//for Schleif//

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//while schleife//

let i = 0;
while (i < 5) {
    console.log(i);
    i++;

}

//Funktion//

function greet (name) {
    return 'Hallo, ' + name;
}

console.log(greet("Iman")); 


//Array//

let fruits = ['Pomegranade', 'Watermelon', 'Cherrys'];
console.log(fruits[0]); // Pomegranade//


let person = {
    name: 'Heinrich',
    age: 59,
    isStudent: true
};
console.log(person.name);



let number = 6;

if (number > 10) {
    console.log("Die zahl ist größer als 10.");
} else {
    console.log("Die Zahl ist 10 oder kleiner.");
}
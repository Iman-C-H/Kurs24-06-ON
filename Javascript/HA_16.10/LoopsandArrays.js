//1.
const city = ["Berlin", "Amsterdam", "Rabat", "Brüssel", "Ankara"];

//2.
city.forEach(HS => {
    console.log(HS.toUpperCase());

});


//3.
const letterAnzahl = city.map(HS => city.length);

console.log("Die Anzahl der Buchstaben in jedem Stadtnamen: ", letterAnzahl)
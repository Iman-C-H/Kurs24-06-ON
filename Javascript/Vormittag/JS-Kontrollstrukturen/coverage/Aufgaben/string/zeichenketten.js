// 1. String Verkettung
/*Schreibe ein Programm, das den Namen und das Alter einer Person als Variablen
speichert und eine Begrüßung in der Form “Hallo, [Name]. Du bist [Alter] Jahre alt.”
ausgibt.*/

name = "Beatrix";
alter = "67";
console.log("Hallo " + name + ". Du bist " + alter + " Jahre alt.")

// 2. Template String
/* Schreibe ein Programm, das die Variablen `vorname`, `nachname` und
`stadt`speichert und eine Vorstellung in der Form “Ich heiße [Vorname] [Nachname]
und komme aus [Stadt].” ausgibt.*/

vorname = " Gerda";
nachname = " Vogel";
stadt = " Darmstadt";
console.log(` Ich heiße ${vorname} ${nachname} und komme aus ${stadt}.`)

// 3. String- Methoden 
/* Gib deinen vollständigen Namen mit der Methode `toLowerCase()`und
`toUpperCase`auf der Konsole aus und entferne mit `trim()`alle überflüssigen
Leerzeichen.*/

str1 = "       Mein Name ist Iman Ceylan";
formattedStrL = str1.trim().toUpperCase();
console.log(formattedStrL);
formattedStrU = str1.trim().toUpperCase();
console.log(formattedStrU);

// 4. String-Interpolation in Funktionen
/* Erstelle eine Funktion namens `begruesse`, die einen Namen als Parameter nimmt
und “Willkommen, [Name]!” zurückgibt.
function greeting(nome) {
    nome = Iman 
    return `Willkommen, ${nome}`;
}
console.log(greeting + nome);*/

// 5. Verwendung von replace()
/* Schreibe ein Programm, das einen Satz enthält und das Wort “schlecht” durch
“großartig” ersetzt. Gib den neuen Satz aus.*/
wort = "schlecht";
neuesWort = wort.replace("schlecht", "großartig");
console.log(neuesWort);
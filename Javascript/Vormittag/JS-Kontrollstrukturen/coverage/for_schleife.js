function calcSum(array){
    // var und let. mit beiden können Variablen deklariert werden.
    // Einsatz haengt von der Verwendung 
    // im Gueltigkeitsbereich = Scope ab. 
    // var: Ist innerhalb der Funktion sichtbar in der deklariert -
    // wird oder global wenn ausserhalb einer funktion deklariert wird.
    // let: Ist innerhalb eines Blocks { } gültig in der es deklariert
    // wird. 
    var sum = 0;
    
    for (let i = 0; i < array.length; i++) {
        sum += array[i]; 
    }
    return sum;
}
const zahlenArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const ergebnisSum = calcSum(zahlenArray);
console.log("Die Summe betraegt: " + ergebnisSum); 

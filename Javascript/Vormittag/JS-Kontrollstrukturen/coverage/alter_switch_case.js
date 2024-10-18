//function = leitet eine Funktion in JS ein
function getAge() {
    //floor = macht aus Kommazahlen Ganzezahlen indem 
    // die Nachkommastellen gestrichen werden.
    //random = ermittelt eine Zufallszahl zwischen 0.0 und 0.99 (1)
    return Math.floor(Math.random() * 100);

}

function checkAge() {
// Holt sich den Wert aus der Funktion getAge()
age = getAge();
console.log("Dein Aler ist: "+ age);

    switch (true) {
        case (age < 18):
            console.log("Du bist minderjährig!");
            break; 
        case (age >= 18 && age <66):
            console.log("Du bist erwachsen!");
            break;
 //       case (age >= 67):
 //           console.log("Du bist im Rendenalter!");
 //           break;
        default:
            console.log("Du bist älter als 67!");
    }

}

checkAge();

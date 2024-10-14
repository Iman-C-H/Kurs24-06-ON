// function = leitet eine Funktion in JS ein
function getCategory() {
    return Math.floor(Math.random() * 66);
}

function checkCategory() {
    //Holt sich den Wert aus der Funktion getGrade()
   alter = getCategory();

    if (alter <= 12) {
        console.log ("Kind");
    } else if (alter >= 13 && alter <= 17) {
        console.log ("Jugendlicher");
    } else if (alter >= 18 && alter <= 64) {
        console.log ("Erwachsener");
    } else if (alter >= 65) {
        console.log ("Senior");
    } else {
        console.log("X");
    }
}
checkCategory();
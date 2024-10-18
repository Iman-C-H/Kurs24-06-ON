// function = leitet eine Funktion in JS ein
function getGrade() {
    return Math.floor(Math.random() * 6) + 1;
}

function checkGrade() {
    //Holt sich den Wert aus der Funktion getGrade()
   const grade = getGrade();

    if (grade == 1) {
        console.log ("Seht gut");
    } else if (grade == 2) {
        console.log ("Gut");
    } else if (grade == 3) {
        console.log ("Befriedigend");
    } else if (grade == 4) {
        console.log ("Ausreichend");
    } else if (grade == 5) {
        console.log ("Mangelhaft");
    } else if (grade == 6) {
        console.log ("Unfenügend");
    } else {
        console.log(" ");
    }
}

checkGrade();

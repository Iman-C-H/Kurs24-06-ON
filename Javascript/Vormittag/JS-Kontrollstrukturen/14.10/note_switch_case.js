/* Erstelle einen weitere Funktion checkGrade( )- Funktion der die Notenbewertung durchführt,
indem er getGrade( ) - Funktion verwendet. Nutze eine switch-case-Anweisung und danach
eine If-Else-Anweisung (Genauso wie im Unterricht), um die Note zu bewerten und eine
entsprechende Rückmeldung auszugeben:
1 = Sehr gut
2 = Gut
3 = Befriedigend
4 = Ausreichend
5 = Mangelhaft
6 = Nicht bestanden*/


function getGrade() {
    return Math.floor(Math.random() * 6) + 1;
}

    
 
function checkGrade() {
    const grade = getGrade();
    console.log(`Die Note ist: ${grade}`);

 switch (grade) {
    case 1:
        console.log("Sehr gut");
        break;
    case 2:
        console.log("Gut");
        break;
    case 3:
        console.log("Befriedigend");
        break;
    case 4:
        console.log("Ausreichend");
        break;
    case 5:
        console.log("Mangelhaft");
        break;
    case 6:
        console.log("Ungenügend");
        break;
    }
}

checkGrade();
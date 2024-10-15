// Summiere gerade Zahlen.
//Erstelle eine Funktion, die alle geraden Zahlen von 1 bis einschlie0lich 100 summiert.
//do {
//    Anweisungen;
//} while (Bedingung)


function sumCount() {
    let resum = 0;
    let i = 1;

    do {
        if (i % 2 == 0) {  
            resum += i;  
        }
        i++; 
    } while (i <= 100); 

    return resum; 
}

const result = sumCount();
console.log("Die Summe der geraden Zahlen beträgt: " + result);

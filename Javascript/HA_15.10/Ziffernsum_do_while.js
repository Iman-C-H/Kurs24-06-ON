// Man nimmt die letzte Zahl und addiert solang mit einem Ruck nach links, bis 0 rauskommt.
// bei 0 wird die Schleife gestoppt.

function ziffernSumme(n) {
    let sum = 0;
    do {
        sum = sum + (n % 10);
        n = Math.floor(n / 10);
    } while (n > 0);
    return sum;
}

console.log(ziffernSumme(248));  

// Schreibe eine Funktionm die alle geraden Zahlen von 1 bis einschließlich 100 summiert.
// while-Schleife.
function calcSum() {
    let sum = 0;
    let i = 1;

    while (i <= 100){
        if (i % 2 == 0){
            sum += i;
        }
        i++; //oder ohne modulu Inkrement erhöhen :  i += 2;
    }

    return sum;

}
const result = calcSum();
console.log("Die Summe beträgt: " + result);
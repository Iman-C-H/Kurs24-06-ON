// 3 Aufgaben in einer Datei. 
// Aufgabe: Zähle Elemente, die größer als ein bestimmter Schwellenwert sind.
// Schwellenwert ist 50
// Array: [10,23,35,47,52,66,71,88,90]


// for Loop

/*function countSum(array) { 
    let count = 0;
    const schwelle = 50;  

    for (let i = 0; i < array.length; i++) {
        if (array[i] > schwelle) {
            count++;  
        }
    }
    return count;  
}

const array = [10, 23, 35, 47, 52, 66, 71, 88, 90];
const result = countSum(array); 
console.log("Die Anzahl der Elemente ist: " + result);  
*/

// while Loop

/*function countSum(array,schwelle) {
    let count = 0;
    let i = 0;
    while (i < array.length) {
        if (array[i] > schwelle) {
            count++;
        }
        i++;
    }
    return count;
}

const array = [10, 23, 35, 47, 52, 66, 71, 88, 90];
const schwelle = 50;
console.log("Die Anzahl der Elemente beträgt: " + countSum(array,schwelle));
*/

// do-while-Schleife

function countSum(array, schwelle) {
    let count = 0;
    let i = 0;
    do {
        if (array[i] > schwelle) {
            count++;
        }
        i++;
    } while (i < array.length);
    return count;
}

const array = [10, 23, 35, 47, 52, 66, 71, 88, 90];
const schwelle = 50;
console.log("Die Anzahl der Werte über dem Schwellenwert beträgt: " + countSum(array, schwelle));

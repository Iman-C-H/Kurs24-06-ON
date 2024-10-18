//1.
let autoArray = ["BMW", "Audi", "Mercedes"];
//2.

    console.log(autoArray[1]);

//3.
autoArray.push("Volkswagen");
console.log(autoArray);

//4.
autoArray.forEach(function(auto) {
    console.log(auto.toUpperCase());
});

//____________________________________________

//Aufgabe2 

//1.//2.//3.
let stadtMap = new Map()
stadtMap.set('stadtname','Berlin');
stadtMap.set('laendername','Deutschland');
stadtMap.set('nomville','Paris');
stadtMap.set('nompays', 'Frankreich');
console.log(stadtMap.get('stadtname'));
console.log(stadtMap.has('Rom'));

//_____________________________________________

//Aufgabe3
//1. 2. Gibt ein Problem bei der Ausgabe. 
stadtMap.set('Rom','Italien');
console.log(stadtMap);

//______________________________________________

//Aufgabe4
//1. 

let farbenSet = new Set(['Gelb','Grün', 'Blau']);
for (let farbe of farbenSet){
    console.log(`Farbe:${farbe}`);
}


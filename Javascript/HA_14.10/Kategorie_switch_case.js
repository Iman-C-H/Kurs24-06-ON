function getWeather() {
    const wetterlagen =["Sonnig","Regnerisch","Schnee","Windig"];
    const randomIndex = Math.floor(Math.random() * wetterlagen.length)
    return wetterlagen[randomIndex];
}
function checkWeather() {
    switch (wetter) {
        case "Sonnig":
            console.log("Gehe spazieren");
            break;
        case "Regnerisch":
            console.log("Bleibe zu Hause und lese ein Buch");
            break;
        case "Schnee":
            console.log("Baue einen Schneemann");
            break;
        case "Windig":
            console.log("Fliege einen Drachen");
            break;
        default:
            console.log("Unbekannte Wetterlage. Keine Aktivität vorgeschlagen.");
    }
}


const wetter = getWeather();
console.log(`Das Wetter ist: ${wetter}`)
checkWeather(wetter);


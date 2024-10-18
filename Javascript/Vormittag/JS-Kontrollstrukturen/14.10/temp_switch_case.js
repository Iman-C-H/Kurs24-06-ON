function getTemperature() {
    return Math.floor(Math.random() * 61) - 20; // von -20 bis 40)
}
 


function checkTemperature() {
const temperature = getTemperature();   
    console.log("Temperatur: " + temperature + " °C");

switch (true) {
    case (temperature < 0):
        console.log("Es ist sehr kalt.");
        break;
    case (temperature >= 0 && temperature <= 15):
        console.log("Es ist kühl.");
        break;
    case (temperature > 15 && temperature <= 40):
        console.log("Es ist angenehm.");
        break;
    default:
        console.log("Ungültige Temperatur."); 
    }
}

checkTemperature();
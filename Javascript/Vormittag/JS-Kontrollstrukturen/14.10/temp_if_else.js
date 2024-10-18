function getTemperature() {
    return Math.floor(Math.random() * 61) - 20; // von -20 bis 40)
}
 


function checkTemperature() {
const temperature = getTemperature();   
    console.log("Temperatur: " + temperature + " °C");


    if (temperature < 0) {
        console.log("Es ist sehr kalt.");
    } else if (temperature >= 0 && temperature <= 15) {
        console.log("Es ist kühl.");
    } else if (temperature > 15 && temperature <= 40) {
        console.log("Es ist angenehm.");
    }
}

checkTemperature();
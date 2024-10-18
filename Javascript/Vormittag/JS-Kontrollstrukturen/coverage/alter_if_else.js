// function = leitet eine Funktion in JS ein
function getAge() {
    return Math.floor(Math.random() * 100); 
}

function checkAge() {
    //Holt sich den Wert aus der Funktion getAge()
    age = getAge();
    console.log('Dein Alter ist:' + age);

    if (age < 18) {
        console.log ("Du bist minderjährig!")
    } else {
        console.log ("Du bist volljährig!")
    }
    
}

checkAge();

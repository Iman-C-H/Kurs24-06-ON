// alte Datei 
const fs = require("fs").promises;
const readline = require("readline");
//Bibliotheken

//Interface für Benutzereingabe
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// 1. readLine Abfrage und Ausgabe.
rl.question("Gib den Namen der Datei ein: ", (fileName) => {
  //console.log(`Dateiname: ${fileName}`);

  // 2.
  rl.question("Gib bitte deine Nachricht ein: ", (fileInput) => {
   // console.log(`Nachricht: ${fileInput}`);
    appendToFile(fileName, fileInput);
    rl.close();
  });
});

// 2. *note: fs steht für fileSystem
async function appendToFile(fileName, fileInput) {
  try {
    await fs.appendFile(fileName, fileInput + "\n");
    console.log("Nachricht erfolgreich hinzugefügt.");
  } catch (err) {
    console.error("Fehler beim Schreiben in die Datei:", err);
  }
}
// Funktion aufrufen


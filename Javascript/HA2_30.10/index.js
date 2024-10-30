// import catFacts from "cat-facts";
// import chalk from "chalk";
// import inquirer from "inquirer";
// import boxen from "boxen";

// // Funktion der Katzenfakten anzeigt:
// function showCatFact() {
//   const fact = catFacts.random(); // zufälliger Fakt über Katzen
//   const quoteBox = boxen(chalk.green(fact), {
//     padding: 1,
//     margin: 1,
//     borderStyle: "double",
//   });
//   console.log(quoteBox); // Zitat in einer Box anzeigen
// }

// async function askForUserName() {
//     const answers = await inquirer.prompt([
//     {
//         type: 'input',
//         name: 'username',
//         message: 'Wie heißt du?'
//     },
//     {
//         type: 'confirm',
//         name: 'random',
//         message: 'Möchtest du ein cooles Cat Fact sehen?',
//         default: false,
//     }]);
//     return answers;
// }
// askForUserName().then(answers) {

// if (answers.username) {
//     console.log(chalk.purple =('Wie heißt du?'));
//   }
//   else if (answers.random) {
//     showCatFact(); // Zitat anzeigen
//     console.log(chalk.yellow(`Hallo, ${answers.username}! Viel Spaß mit den CatFacts! ;) `));
//   }
//   else  {

//     console.log(chalk.yellow("Danke, dass du das Programm genutzt hast!"));
//     process.exit(0); // Programm beenden
//  }
// };

// // Hauptfunktion
// async function main() {
//   console.log(chalk.blue("Willkommen, möchtest du Cat Facts sehen?"));
//   await askForUserName(); // Starte die Benutzerinteraktion
// }
// // Hauptfunktion aufrufen
// main();

import catFacts from "cat-facts";
import chalk from "chalk";
import inquirer from "inquirer";
import boxen from "boxen";

// Funktion der Katzenfakten anzeigt:
function showCatFact() {
  const fact = catFacts.random(); // zufälliger Fakt über Katzen
  const quoteBox = boxen(chalk.green(fact), {
    padding: 1,
    margin: 1,
    borderStyle: "double",
  });
  console.log(quoteBox); // Zitat in einer Box anzeigen
}

// Funktion für die Namensabfrage
async function askForUserName() {
  const answers = await inquirer.prompt([
    {
      type: "confirm",
      name: "random",
      message: "Hallo Möchtest du ein cooles Cat Fact sehen?",
      default: false,
    },
    {
      type: "input",
      name: "username",
      message: "Wie heißt du?",
    },
  ]);

  if (answers.username && answers.random) {
    console.log(
      chalk.yellow(`Hallo, ${answers.username}! Viel Spaß mit den CatFacts! ;)`)
    );
    showCatFact(); // Zitat anzeigen
  } else {
    console.log(chalk.yellow("Danke, dass du das Programm genutzt hast!"));
    process.exit(0); // Programm beenden
  }
}

// Hauptfunktion
async function main() {
  await askForUserName(); // Starte die Benutzerinteraktion
  //   console.log(chalk.blue("Willkommen, möchtest du Cat Facts sehen?"));
}

// Hauptfunktion aufrufen
main();

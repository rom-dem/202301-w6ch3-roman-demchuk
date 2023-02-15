import chalk from "chalk";
import inquirer from "inquirer";

console.log(chalk.blue("Hello world!"));

inquirer
  .prompt([
    {
      type: "list",
      message: "How is the bootcamp going?",
      name: "bootCampProgress",
      choices: ["Very good", "Good", "Send conitos"],
    },
    {
      type: "checkbox",
      name: "wantToContinue",
      message: "Are you willing to continue?",
      choices: ["Yes", "Yes"],
    },
  ])
  .then((answers) => {
    console.log(chalk.bgCyanBright(JSON.stringify(answers)));
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("There's clearly an error. And no sign of Commander.");
    } else {
      console.log("There is some king of bug");
    }
  });

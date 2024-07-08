#! /usr/bin/env node
import inquirer from "inquirer";
// CLI guessing number game
const randomnumber = Math.floor(Math.random() * 6 + 1);
console.log("welcome to CLI guessing number Game");
let answer = await inquirer.prompt({
    name: "userguessednumber",
    message: "please guess number between 1-6:",
    type: "number"
});
if (answer.userguessednumber === randomnumber) {
    console.log("congratulation!, you guessed the right number");
}
else {
    console.log("you guessed the wrong number");
}

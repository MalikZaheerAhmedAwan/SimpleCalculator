#! /usr/bin/env node

// SHABANG  "SHABANG": unknown world.


import inquirer from "inquirer";
const answer = await inquirer.prompt([{ message: "Enter First Number: ", type: "number", name: "FirstNumber" },
{ message: "Enter Second Number: ", type: "number", name: "secondNumber" },
{ message: "Select one of thr operators to perform operation", type: "list", name: "operator", choices:["Addition", "Subtraction", "Multiplication", "Division"], },
]);

if (answer.operator === "Addition")
{ console.log(answer.FirstNumber + answer.secondNumber );}
else if (answer.operator === "Subtraction")
{ console.log(answer.FirstNumber - answer.secondNumber );}
else if (answer.operator === "Multiplication")
{ console.log(answer.FirstNumber * answer.secondNumber );}
else if (answer.operator === "Division")
{ console.log(answer.FirstNumber / answer.secondNumber );}
else { console.log("Please select valid operator");}
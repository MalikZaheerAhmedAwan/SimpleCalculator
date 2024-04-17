#! /usr/bin/env node

// SHABANG  "SHABANG": unknown world.

import inquirer from "inquirer";
let result;
const answer = await inquirer.prompt([{ message: "Enter First Number: ", type: "number", name: "FirstNumber" },
{ message: "Enter Second Number: ", type: "number", name: "secondNumber" },
{ message: "Select one of thr operators to perform operation", type: "list", name: "operator", choices:["Addition", "Subtraction", "Multiplication", "Division"], },
]);

console.log("Your Choice is : "+answer.operator); 
if (answer.operator === "Addition")
    result=answer.FirstNumber + answer.secondNumber;
else if (answer.operator === "Subtraction")
     result=answer.FirstNumber - answer.secondNumber;
else if (answer.operator === "Multiplication")
result=answer.FirstNumber * answer.secondNumber;
else if (answer.operator === "Division")
result=answer.FirstNumber / answer.secondNumber;
else { console.log("Please select valid operator");}
console.log("Answer is : "+result);




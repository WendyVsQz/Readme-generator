const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions=[

    {
type: "input",
name: "tittle",
message: "Name project"
    },

    {
type: "input",
name: "description",
message: "describe the purpose and functionality of the project"
    },

    {
type: "checkbox",
name: "license",
message: "Select an applicable license according to this project",
choices: ["MIT", "Apache license 2.0", "Artistic license 2.0", "Boost software license 1.0", 
"BSD3-clause clear license", "creative commons license family", "Eclipse public license 1.0",
"GNU general public license v2.0", "ISC", "The Unlicense"],
    },

    {
type: "input",
name: "require",
message: "List any project dependencies here",
    },

    {
type: "input",
name: "usage",
message: "State the languages and technologies used in this project",
    },
];

// writing README.md file

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}


// function to initialize program
function init(){
    inquirer.prompt(questions).then((responses) => {
        console.log("creating README.md file...");
        writeToFile("./README.md", generateMarkdown({...responses}));
    });
    
};

// function call to initialize program

init();

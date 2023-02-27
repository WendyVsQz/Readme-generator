const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions=[
// tittle
    {
type: "input",
name: "tittle",
message: "Name project:"
    },
// Description
    {
type: "input",
name: "description",
message: "describe the purpose and functionality of the project:"
    },
// License badge
    {
type: "checkbox",
name: "license",
message: "Select an applicable license according to this project:",
choices: ["MIT", "Apache license 2.0", "BSD3", "CC0", "Eclipse", "GNU", "IBM", "ISC"],
    },
// Dependencies
    {
type: "input",
name: "require",
message: "List any project dependencies here:",
    },
// Languages & technologies
    {
type: "input",
name: "features",
message: "State the languages and technologies used in this project:"
    },
// Use of the application
    {
type: "input",
name: "usage",
message: "Describe how to use the application:",
    },
// Contributors
    {
type: "input",
name: "contributors",
message: "Mention the number of contributors:"
    },
// Contact
    {
type: "input",
name: "contact",
message: "mention email:"
    }
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

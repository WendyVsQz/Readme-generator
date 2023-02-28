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
        message: "Name project:",
        validate: function (input) {
            if (input === "") {
                return "Project tittle cannot be empty.";
            } else {
                return true;
            }
        }
    },
    // Languages & technologies
    {
        type: "checkbox",
        name: "features",
        message: "State the languages and frameworks used in this project:",
        choices: ["JavaScript", "Bootstrap", "NPM", "HTML",
        "CSS", "Angular.js", "jQuery", "React", "SASS","Markdown",
        "C++", "C#", "TypeScript", "C"],
        validate: function(checkbox) {
            if (checkbox.length === 0) {
                return "Select at least one language or framework."
            } else {
                return true;
            }
        }    
    },
    
    {
    // Description
    type: "input",
        name: "description",
        message: "describe the purpose and functionality of the project:",
        validate: function (input) {
            if (input === "") {
                return "project description cannot be empty.";
            } else {
                return true;
            }
        }
    },
    
    
    // Dependencies
    {
        type: "input",
        name: "require",
        message: "List any project dependencies here:",
    },
    
    // Use of the application
    {
        type: "input",
        name: "usage",
        message: "Describe how to use the application:",
        validate: function (input) {
            if (input === "") {
                return "usage description cannot be empty.";
            } else {
                return true;
            }
        }
    },
    // Contributors
    {
        type: "input",
        name: "contributors",
        message: "Mention the Github name of contributors:"
    },
    // Contact
    {
        type: "input",
        name: "contact",
        message: "mention email:",
        validate: function(input) {
            if (input ==="") {
                return "Email cannot be empty.";
            } else {
                return true;
            }
        }
    },

    // License badge
    {
        type: "checkbox",
        name: "license",
        message: "Select an applicable license according to this project:",
        choices: ["MIT", "Apache license 2.0", "BSD3", 
                "CC0", "Eclipse", "GNU", "IBM", "ISC", "None"],
    },
];


// writing README.md file

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}



// function to initialize program
function init(){
    console.log( 
        "\n",
        " ╔══*.·:·.☽✧    ✦    ✧☾.·:·.*══╗ ",
        
        " *Welcome to your README generator*",
        
        " ╚══*.·:·.☽✧    ✦    ✧☾.·:·.*══╝ ", 
        "\n",
        
        "\n",
        ">Answer the questions below to generate the README.md file<",
        "\n",
    );
                inquirer.prompt(questions).then((responses) => {
                console.log("creating README.md file...")
                writeToFile("./README.md", generateMarkdown({...responses}, 
                    function(err) {
                        if (err) {
                            return console.log(err);
                        }
                        console.log("the README file was created!");
                    }
                ))
            });
        } 

// function call to initialize program

init();

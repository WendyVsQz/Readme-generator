
// Creating a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license !== "none") {
    return "![Github license](https://img.shields.io/badge/license-MIT-blue.svg)";
    }
  };

//Creating a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.tittle} 
## Features
${data.features}
## Description
${data.description}
## Deployed Application URL
* 
## DEMO
* 
## Table of Contents
* [Features](#features)
* [Description](#description)
* [Dependencies](#dependencies)
* [How to Use This Application](#HowtoUseThisApplication)
* [Contributors](#contributors)
* [Contact](#contact)

## Dependencies
${data.require}
## How to Use This Application:
${data.usage}
## Contributors
${data.contributors}
## License
This project is licensed under the terms of the: ${renderLicenseBadge(data.license)}
## Contact me
${data.contact}
`;
}

module.exports = generateMarkdown;


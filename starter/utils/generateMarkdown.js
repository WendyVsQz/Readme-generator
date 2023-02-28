const { default: CheckboxPrompt }= require("inquirer/lib/prompts/checkbox");

// creating a function that return a language badge based on which languages/technologies are used
function renderfeatureBadge (features) {
  if (features === "JavaScript") {
    return "![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)";
  } else if (features === "Bootstrap") {
    return "![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)";
  } else if (features === "NPM") {
    return "![Npm package version](https://badgen.net/npm/v/express)](https://npmjs.com/package/express)";
  } else if (features === "HTML") {
    return "[![ForTheBadge uses-html](http://ForTheBadge.com/images/badges/uses-html.svg)](http://ForTheBadge.com)";
  } else if (features === "CSS") {
    return "[![ForTheBadge uses-css](http://ForTheBadge.com/images/badges/uses-css.svg)](http://ForTheBadge.com)";
  } else if (features === "Angular.js") {
    return "![Angular.js](https://img.shields.io/badge/angular.js-%23E23237.svg?style=for-the-badge&logo=angularjs&logoColor=white)";
  } else if (features === "jQuery") {
    return "![jQuery](https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white)";
  } else if (features === "React") {
    return "![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)";
  } else if (features === "SASS") {
    return "![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)";
  } else if (features === "C++") {
    return "![C++](https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white)";
  } else if (features === "C#") {
    return "![C#](https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white)";
  } else if (features === "TypeScript")  {
    return "![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)";
  } else if (features === "C") {
    return "![C](https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white)";
  } else if (features ==="None") {
    return "";
  }
};
// Creating a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === "BSD3") {
    return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"; 
  } else if (license ==="CC0") {
    return "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
  } else if (license ==="Eclipse") {
    return "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
  } else if (license ==="GNU") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license ==="IBM") {
    return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
  } else if (license ==="MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license ==="ISC") {
    return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
  } else if (license ==="None") {
    return "";
  }
};

//Creating a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.tittle} 
## Features
${ renderfeatureBadge (data.features)}
## Description
${data.description}
## Deployed Application URL
${data.link}
## Screenshot
![alt-text](${data.screenshot})

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
## Questions
## License
${renderLicenseBadge(data.license)}
## Contact me
${data.contact}
`;
}

module.exports = generateMarkdown;


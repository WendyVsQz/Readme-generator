// Creating a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === "BSD3") {
    return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`; 
  }

  if (license ==="CC0") {
    return `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`;
  }

  if (license ==="Eclipse") {
    return `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
  }

  if (license ==="GNU") {
    return ` [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }

  if (license ==="IBM") {
    return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
  }

  if (license ==="MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }

  if (license ==="ISC") {
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
  }
}

// creating a function that return a language badge based on which languages/technologies are used
function renderfeatureBadge(features) {
  if (features === "JavaScript") {
    return `![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)`
    }
  if (features === "Bootstrap") {
    return `![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)`
    }
  if (features === "Npm") {
    return ` [![Npm package version](https://badgen.net/npm/v/express)](https://npmjs.com/package/express)`
  }
  if (features === "HTML") {
    return `[![ForTheBadge uses-html](http://ForTheBadge.com/images/badges/uses-html.svg)](http://ForTheBadge.com)`
  }
  if (features === "CSS") {
    return `[![ForTheBadge uses-css](http://ForTheBadge.com/images/badges/uses-css.svg)](http://ForTheBadge.com)`
  }
  if (features === "Angular.js") {
    return `![Angular.js](https://img.shields.io/badge/angular.js-%23E23237.svg?style=for-the-badge&logo=angularjs&logoColor=white)`
  }
  if (features === "jQuery") {
    return `![jQuery](https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white)`
  }
  if (features === "React") {
    return ` ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)`
  }
  if (features === "SASS") {
    return ` ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)`
  }
  if (features === "C++") {
    return ` ![C++](https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white)`
  }
  if (features === "C#") {
    return `![C#](https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white)`
  }
  if (features === "TypeScript")  {
    return `![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)`
  }
  if (features === "C") {
    return ` ![C](https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white)
  }`
  }
}

function renderContributors(contributors) {
  if(contributors!=="none"){
    return `[![GitHub contributors](https://img.shields.io/github/${contributors}/Naereen/badges.svg)](https://GitHub.com/Naereen/badges/graphs/contributors/)`
  }
}
//Creating a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title} 
${renderLicenseBadge(data.license)}
## Description
${data.description}
## Deployed Application URL
${data.link}
## Screenshot
![alt-text](${data.screenshot})
## Table of Contents
* [Features](#features)
* [Languages & Dependencies](#languagesanddependencies)
* [How to Use This Application](#HowtoUseThisApplication)
* [Contributors](#contributors)
* [Testing](#testing)
* [Questions](#questions)
## Features
${renderfeatureBadge(data.features)}
## Dependencies
${data.require}
## How to Use This Application:
${usage}
## Contributors
${renderContributors(data.contributors)}
## Questions
${data.contact}
`;
}

module.exports = generateMarkdown;


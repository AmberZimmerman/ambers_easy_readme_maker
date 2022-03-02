// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   if ('MIT') {
//     return `https://img.shields.io/badge/License-MIT-green.svg`
//   } else {
//     return "";
//   }
// };

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//   if ('MIT') {
//     return `https://opensource.org/licenses/MIT`
//   } else {
//     return "";
//   }
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return`# ${data.title}
### License:
![License] 
### License Description:
[Click here for the most current description of this license]
### Link to deployed project:
${data.deployed}
## Table of Contents: 
* [Description](#description)
* [Installation](#installation)
* [Usage Instructions](#usage-instructions)
* [License](#license)
* [Contribution Guidelines](#contribution-guidelines)
* [Tests](#tests)
* [Questions](#questions)
* [Screenshots](#screenshot)
### Description of the project:
${data.description}
### Installation:
In order to install the necessary dependencies, open the console and run the following:
\`\`\`${data.installations}\`\`\`
### Usage Instructions:
${data.usage}
### Contribution Guidelines:
${data.contributing}
### Tests:
In order to test open the console and run the following:
\`\`\`${data.tests}\`\`\`
### Questions:
If you have any questions contact me on [GitHub](https://github.com/${data.username}) 
### Screenshot:
![My Image](${data.screenshot}) 
`  ;
}


module.exports = {
  generateMarkdown
};

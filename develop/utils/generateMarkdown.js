// TODO: Create a function that returns a license badge based on which license is passed in

function generateMarkdown(data) {
const generateBadge = () => {

let licenseBadge;

switch (license) {
  case license = 'MIT':
    licenseBadge = '[![License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)';
    break;
  case license = 'BSD-2-Clause':
      licenseBadge = '[![License](https://img.shields.io/badge/License-BSD_2-Clause-green.svg)](https://opensource.org/licenses/BSD-2-Clause)';
      break;
  case license = 'GNUAGPLv3':
    licenseBadge = '[![License](https://img.shields.io/badge/License-GNUAGPLv3-green.svg)](https://www.gnu.org/licenses/GPL-3.0)';
    break;
  case license = 'BSD-3-Clause':
    licenseBadge = '[![License](https://img.shields.io/badge/License-BSD_3.0-Clause-green.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    break;
  case license = 'GNULGPLv3':
      licenseBadge = '[![License](https://img.shields.io/badge/License-GNULGPLv3-green.svg)](https://www.gnu.org/licenses/LGPL-3.0)';
      break;
  case license = 'Apache-2.0':
    licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-green.svg)](https://opensource.org/licenses/Apache-2.0)';
    break;
  case license = 'Mozilla-v2.0':
    licenseBadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-green.svg)](https://opensource.org/licenses/MPL-2.0)';
    break;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

return`# ${data.title}
### License:
${licenseBadge} 
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
` 

}}

module.exports = {
  generateMarkdown
};


// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');


// TODO: Create an array of questions for user input
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const questions = () =>
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name',
            default: 'Amber Zimmerman',
        },
        {
            type: 'input',
            message: 'What is your github username (no @ required)?',
            name: 'username',
            default: 'AmberZimmerman',
        }, 
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
            default: 'Project Title',
        }, 
        {
            type: 'input',
            message: 'What is the link for the deployed project?',
            name: 'deployed',
            default: 'Link for the deployed project is unavailable',
        }, 
    
        {
            type: 'list',
            message: 'Choose a license for your project.',
            choices: ['MIT', 'BSD-2-Clause', 'gpl-license', 'GNUAGPLv3', 'GNUGPLv3', 'GNULGPLv3',  'Apache-2.0', 'lgpl-license', 'BSD-3-Clause'],
            name: 'license'
        },
        {
            type: 'input',
            message: 'What is a description of the project?',
            name: 'description',
            default: 'General description here',
        },
        {
            type: 'input',
            message: 'What command should be run to install dependencies?',
            name: 'installation',
            default: 'No installation required at this time',
        }, 
        {
            type: 'input',
            message: 'What does the user need to know to use the repo?',
            name: 'usage',
            default: 'usage here',
        }, 
        {
            type: 'input',
            message: 'What does a user need to know in order to contribute to the repo?',
            name: 'contributing',
            default: 'How can a user contribute',
        }, 
        {
            type: 'input',
            message: 'If applicable, provide any tests written for your application and provide examples on how to run them.',
            name: 'tests',
            default: 'There are no tests to run for this project',
        },
        {
            type: 'input',
            message: 'Insert a screenshot of the project',
            name: 'screenshot',
            default: 'Project screenshot not available for this project',
        }
    ]);


// TODO: Create a function to initialize app
function init(data) {
return`# ${data.title}
### License:
![License](https://img.shields.io/badge/License-${data.license}-blue.svg)
### License Description:
[Click here for the most current description of this license](https://opensource.org/licenses/${data.license})
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
    }

    const writeToFile = util.promisify(fs.writeFile);

// Function call to initialize app
    questions()
    .then((data) => writeToFile('README.md', init(data)))
        .then(() => console.log('You made a readme'))
        .catch((err) => console.error(err));



        // TODO: Create a function to write README file
    // fs.writeFile('README.md', data, (err) => 
    //    err ? console.error(err) : console.log('success!')
    // );



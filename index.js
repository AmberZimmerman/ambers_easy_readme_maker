// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// TODO: Create an array of questions for user input
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
inquirer
    .prompt([
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
            default: 'Link for deployed project here',
        }, 
        {
            type: 'input',
            message: 'What command should be run to install dependencies?',
            name: 'installation',
            default: 'What command should be run',
        }, 
        {
            type: 'list',
            message: "Choose a license for your project.",
            choices: ['MIT', 'Mozilla Public License 2.0','GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3',  'Apache License 2.0', 'Boost Software License 1.0', 'The Unlicense', 'BSD 3'],
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
            default: 'How can a user contribute',
        },
        {
            type: 'input',
            message: 'Insert a screenshot of the project',
            name: 'screenshot',
            default: 'Project screenshot here',
        },
        {
            type: 'input',
            message: 'Questions',
            name: 'questions',
            default: 'Project screenshot here',
        },
    ])

    .then(function(response) {
        console.log(response);
    });



// TODO: Create a function to write README file
// function writeToFile('README.md', data) {
//     fs.writeFile('README.md', data, (err) => 
//        err ? console.error(err) : console.log('success!')
//     )};

// TODO: Create a function to initialize app
// function init() {
//     const userResponses = inquirer.prompt(questions);
//     console.log(`You're responses: `, userResponses);
// };

// Function call to initialize app
// init();
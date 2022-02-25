// External packages
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

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
            message: 'What is your github user name (no @ required)?',
            name: 'name',
            default: 'Amber Zimmerman',
        }, 
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name',
            default: 'Amber Zimmerman',
        }, 
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name',
            default: 'Amber Zimmerman',
        }, 
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name',
            default: 'Amber Zimmerman',
        }, 
       
    ])

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
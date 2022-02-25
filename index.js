// External packages
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const criteria = () => 
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
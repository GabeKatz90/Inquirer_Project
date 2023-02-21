const inquirer = require("inquirer");
const fs = require('fs')
const generateMarkdown = require('./utilities/generateMarkdown.js')

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'

    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project here:'

    },
    {
        type: 'input',
        name: 'installation',
        message: 'How is your software installed?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How is your software used?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How is your software used?'
    },
    {
        type: 'list',
        name: 'license',
        message: "What kind of license does your project have?",
        choices: ['MIT', 'Apache', 'GPL']
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Where can people contribute to this project?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'How can a user test your software?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub user name?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },

];


function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            writeToFile("README.md", generateMarkdown({ answers }))
        })
}

init();
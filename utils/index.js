const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");

// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'What is the title of your project?',
            },
            {
                type: 'input',
                name: 'description',
                message: 'Please give a description of your project:',
            },
            // {
            //     type: 'input',
            //     name: 'contents',
            //     message: 'Please list out the sections you want to include in your table of contents:',
            // },
            {
                type: 'input',
                name: 'installation',
                message: 'How would a user install this application?',
            },
            {
                type: 'input',
                name: 'usage',
                message: 'How do you use this application?',
            },
            {
                type: 'input',
                name: 'license',
                message: 'Please select one of the following licenses for this application:',
            },
            {
                type: 'input',
                name: 'contribution',
                message: 'List any resources used in this application eligable for recognition',
            },
            {
                type: 'input',
                name: 'tests',
                message: 'How should the user test this application?',
            },
            {
                type: 'input',
                name: 'questions',
                message: 'Enter your email address, so users can contact you with questions:',
            },
        ])
        .then((answers) => {
            console.log(answers);
            const readmeContent = generateMarkdown(answers);

            // Write to file
        });
};

// function call to initialize program
init();

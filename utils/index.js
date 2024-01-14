const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

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
                name: 'Project title',
                message: 'What is the title of your project?',
            },
            {
                type: 'input',
                name: 'Description',
                message: 'Please give a description of your project:',
            },
            {
                type: 'input',
                name: 'Table of contents',
                message: 'Please list out the sections you want to include in your table of contents:',
            },
            {
                type: 'input',
                name: 'Installation',
                message: 'How would a user install this application?',
            },
            {
                type: 'input',
                name: 'Usage',
                message: 'How do you use this application?',
            },
            {
                type: 'input',
                name: 'License',
                message: 'Please select one of the following licenses for this application:',
            },
            {
                type: 'input',
                name: 'Contribution',
                message: 'List any resources used in this application eligable for recognition',
            },
            {
                type: 'input',
                name: 'Tests',
                message: 'How should the user test this application?',
            },
            {
                type: 'input',
                name: 'Questions',
                message: 'Enter your email address, so users can contact you with questions:',
            },
        ])};
        .then((answers) => {
            generateMarkdown(answers);
        });

    // function call to initialize program
    init();

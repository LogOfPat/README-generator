// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
//const generatorMarkdown = require('.utils/generateMarkdown.js');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'description',
            message: 'Enter a discription of your application',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter how to install  your application',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter how to use your application',
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Enter anyone you would like to credit',
        },
        {
            type: 'list',
            name: 'license',
            message: "Which license would you like to use",
            choices: ['MIT', 'Mozilla', 'Creative Commons', 'SIL'],
        },
        {
            type: 'input',
            name: 'features',
            message: 'Enter features of your app',
        },
    ])
    .then((data) => {

        fs.writeFile(`./readme-storage/readmetest.md`, JSON.stringify(data,null, '\t'), (err)  =>
        err ? console.log(err) : console.log('Success!')
        );
    });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

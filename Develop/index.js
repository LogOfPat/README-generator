// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
//const generatorMarkdown = require('.Develop/utils/generateMarkdown.js');
const fileName =`./readme-storage/readmetest.md`;
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
            choices: ['MIT', 'Mozilla', 'Eclipse', 'SIL'],
        },
        {
            type: 'input',
            name: 'features',
            message: 'Enter features of your app',
        },
    ])
    .then((data) => {
        writeToFile(fileName, data);
    });

//Creates and stores the generated readme in /readme-storage and generates a test file for debugging
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function (err) {
        if (err) throw err;
        console.log('Readme generated!');
    });
    //Creates a file displaying the stored data
    fs.writeFile('./readme-storage/test.md', JSON.stringify(data), function (err) {
        if (err) throw err;
    })
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

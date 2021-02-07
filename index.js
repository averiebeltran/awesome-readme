// TODO: Include packages needed for this application

const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateReadme = require("./util/generate/Readme");
const generateMarkdown = require("./utils/generateReadme");
// const writeFileASync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the project title?"
    },
    {
        type: "input",
        name: "description",
        message: "Write a breif description of your project"
    },
    {
        type: "input",
        name: "installation",
        message: "Describe the installation process for your project"
    },
    {
        type: "input",
        name: "usage",
        message: "How do you use the project?"
    },
    {
        type: "input",
        name: "contribution",
        message: "How can someone contribute to this project?"
    },
    {
        type: "input",
        name: "test",
        message: "If a test is included, what are the test instructions?"
    },
    {
        type: "list",
        name: "license",
        message: "Choose the appropraite license for this project",
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open"
        ]
    },
    {
        type: "input",
        name: "username",
        message: "Please enter your GitHub username"
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
async function init() {
    try {
        const response = await inquirer.prompt(questions);
        const generateReadme = generateMarkdown(response);
    } catch(error) {
        console.log(error);
    }
}

// Function call to initialize app
init();

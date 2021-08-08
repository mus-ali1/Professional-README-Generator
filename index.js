//node modules
const inquirer = require('inquirer');
const fs = require('fs');

// inquirer to generate questions
inquirer.prompt([
    {
        type: "input",
        messaage: "what is your project title?",
        name: "tittle",
        //validate property to check user has provided a value
        validate: (value) => { if (value) { return true } else { return "I need a value to continue" } },

    }
]


)
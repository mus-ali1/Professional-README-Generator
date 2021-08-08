//node modules
const inquirer = require('inquirer');
const fs = require('fs');

// inquirer to generate questions
inquirer.prompt([
    {
        type: "input",
        message: "what is your project title ?",
        name: "title",
        //validate property to check user has provided a value
        validate: (value) => { if (value) { return true } else { return "I need a value to continue" } },

    },
    {
        type: "input",
        message: "Please provide a short decription of your project ?",
        name: "description",
        //validate property to check user has provided a value
        validate: (value) => { if (value) { return true } else { return "I need a value to continue" } },


    },
    {
        type: "input",
        message: "What steps are required to install your project ?",
        name: "installation",

        //validate property to check user has provided a value
        validate: (value) => { if (value) { return true } else { return "I need a value to continue" } },

    },
    {
        type: "input",
        message: "Any instructions and examples of usage ?",
        name: "installation",
        //validate property to check user has provided a value
        validate: (value) => { if (value) { return true } else { return "I need a value to continue" } },


    },
    {
        type: "input",
        message: "Any credits ?",
        name: "installation",
        //validate property to check user has provided a value
        validate: (value) => { if (value) { return true } else { return "I need a value to continue" } },




    },
    {
        type: "input",
        message: "Any instructions and examples of usage ?",
        name: "installation",
        //validate property to check user has provided a value
        validate: (value) => { if (value) { return true } else { return "I need a value to continue" } },




    }
]


)
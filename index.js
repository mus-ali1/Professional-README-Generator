//node modules
const inquirer = require('inquirer');
const fs = require('fs');
let path = './README.md';
let $template = "";


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
        name: "usage",
        //validate property to check user has provided a value
        validate: (value) => { if (value) { return true } else { return "I need a value to continue" } },


    },
    {
        type: "input",
        message: "Any credits/ collaborators ?",
        name: "credits",
        //validate property to check user has provided a value
        validate: (value) => { if (value) { return true } else { return "I need a value to continue" } },




    }, {

        type: "input",
        message: "How can this code be tested?",
        name: "test"


    },
    {

        type: "list",
        message: "What licence is relevant to this project?",
        name: "licence",
        choices: ["MIT", "Apache", "GPLv3", "Other", "N/A"],
        //validate property to check user has provided a value
        validate: (value) => { if (value) { return true } else { return "I need a value to continue" } },
    },
    {

        type: "input",
        message: "GitHub Username ?",
        name: "git",
        //validate property to check user has provided a value
        validate: (value) => { if (value) { return true } else { return "I need a value to continue" } },

    },
    {

        type: "input",
        message: "Email ?",
        name: "email",
        //validate property to check user has provided a value
        validate: (value) => { if (value) { return true } else { return "I need a value to continue" } },

    }, {
        type: "input",
        message: "Enter your image url (https://github.com/your-repository/...)",
        name: "image",

    }
])
    // Receives response from questions
    .then(function (response) {
        // Creates the template for the readme
        let licenceInfo = "";
        $template += `# ${response.title}\n\n`;

        if (response.licence === "MIT") {
            $template += `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n\n`;
            licenceInfo = '(https://opensource.org/licenses/MIT)\n\nYou have the freedom to do as you like with this permissive software, as long as an original copy and license notice is included. I can not be held liable for this software.\n\n';
        } else if (response.licence === "Apache") {
            $template += `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)\n\n`;
            licenceInfo = '(http://www.apache.org/licenses/LICENSE-2.0.html)\n\nYou have the freedom to do as you like with this permissive software. This license also contains a patent license from the contributors of the code.\n\n';
        } else if (response.licence === "GPLv3") {
            $template += `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)\n\n`;
            licenceInfo = '(http://www.gnu.org/licenses/gpl-3.0.html)\n\nYou have the freedom to run, study, share, and modify this permissive software. Anyone who acquires this software must make it available to anyone else under the same licensing agreement.\n\n';
        };


        $template += `### Table of Contents\n\n- [Description](#description)\n- [Installation](#installation)\n- [Usage](#usage)\n- [Contributing](#contributing)\n- [Testing](#testing)\n- [Questions](#questions)\n- [License](#license)\n- [Application Image](#application-image)\n\n`;
        $template += `## Description\n\n${response.description}\n\n`;
        $template += `## Installation\n\n${response.installation}\n\n`;
        $template += `## Usage\n\n${response.usage}\n\n`;
        $template += `## Credits/Collaborators\n\n${response.credits}\n\n`;
        $template += `## Questions\n\nIf you have any questions feel free to contact me here:\n\n ##### Github: [github.com/${response.username}](https://github.com/${response.username})\n\n ##### Email: [${response.email}](mailto:${response.email}?subject=[GitHub])\n\n`;
        $template += `## Testing\n\n[${response.test}]\n\n`;
        $template += `## License\n\n[${response.licence}]${licenceInfo}`;
        $template += `## Application Image\n\n ![Image of Application](${response.image})`;


        // Writes the created template to README.md file
        fs.writeFile(path, $template, function (err) {
            if (err) {
                console.log(err);
            }
        })
    });
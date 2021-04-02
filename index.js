const fs = require('fs');
const inquirer = require('inquirer');
const prompts = () => {
    return inquirer
        .prompt([
            {
            type: 'input',
            message: 'What is your project name?',
            name: 'name',
            },
            {
            type: 'input',
            message: 'Describe why you built this project and the problems that it solves.',
            name: 'description',
            },
            {
            type: 'input',
            message: 'What are the step by step instructions on how a user would install your application?',
            name: 'install',
            },
            {
                type: 'input',
                message: 'How does a user use your application?',
                name: 'use',
            },
            {
                type: 'input',
                message: 'Please list any resources or collaborators',
                name: 'credits',
            },
            // {
            //     type: 'list',
            //     choices: [ "Choice A", new inquirer.Separator(), "choice B" ]
            //     message: 'What is your LinkedIn url?',
            //     name: 'license',
            // },
        ])
}
  const createMD = (response) =>
   `# ${response.name} 

   ## Description
    ${response.description}

    ##Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)

    ##Installation
    ${response.install}

    ##Usage
    ${response.use}

    ##Credits
    Special shoutout to ${response.credits} for helping to me to make this application!`

    // ##License
    // ${response.license}
    //;
const init = () => {
    prompts()
    .then((response) => fs.writeFile('README.md', createMD(response), (err) =>
    err ? console.error(err) : console.log('Success!')));
}
init();
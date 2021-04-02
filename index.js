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
            message: 'What are your hobbies?',
            name: 'hobby',
            },
            {
                type: 'input',
                message: 'What is your favorite food?',
                name: 'food',
            },
            {
                type: 'input',
                message: 'Enter your GitHub username:',
                name: 'username',
            },
            {
                type: 'input',
                message: 'What is your LinkedIn url?',
                name: 'linkedin',
            },
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
    - License](#license)
    My hobbies are ${response.hobby}
    My favorite food is ${response.food}
    My GitHub username is ${response.username}
    My LinkedIn url is ${response.linkedin}
    `;
const init = () => {
    prompts()
    .then((response) => fs.writeFile('reademe.md', createMD(response), (err) =>
    err ? console.error(err) : console.log('Success!')));
}
init();
const fs = require('fs');
const inquirer = require('inquirer');
const prompts = () => {
    return inquirer
        .prompt([
            {
            type: 'input',
            message: 'What is your user name?',
            name: 'name',
            },
            {
            type: 'input',
            message: 'Where are you from?',
            name: 'locaion',
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
   `My name is ${response.name}
    I am from ${response.location}
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
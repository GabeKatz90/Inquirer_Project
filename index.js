const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utilities/generateMarkdown.js');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your previous project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a short description of your project here:'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'which apis were used to achieve required search  ?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How is your website useful/helpful ?'
        },
        {
            type: 'list',
            name: 'license',
            message: "What kind of license does your project have ?",
            choices: ['MIT', 'Apache', 'GPL']
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub user name ?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address ?'
        },
    ]);
};

console.log (generateMarkdown);

    const init = () => {
        promptUser()
        .then ((answers) => fs.writeFileSync('README.md', generateMarkdown(answers), console.log(answers)))
        .then(() => console.log ('Successful'),

        )
        .catch((err) => console.error(err));
    };
    init();

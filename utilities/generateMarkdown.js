
function renderLicenseBadge(license) { 
}

function renderLicenseLink(license) { }

function renderLicenseSection(license) { }


function generateMarkdown(data) {

    return `# ${data.title},

    ![App License]
    
(https://img.shields.io/badge/license-${data.license}-blue.svg)

  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  This project is licensed under 
  ${data.license}.
  ## Questions
  For any questions about this project contact me directly at ${data.email}.  You can also find my other repos at [${data.github}](https://github.com/${data.github}/).
  `;
  
}

function writeToFile () {

}

module.exports = generateMarkdown;

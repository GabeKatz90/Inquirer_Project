
function renderLicenseBadge(license) { }

function renderLicenseLink(license) { }

function renderLicenseSection(license) { }


// function (data) {
//     let readMeText = `#${data.title}

// ${data.description}

// ${data.installation}

// ${data.usage}

// ${data.license}

// ${data.contributions}

// ${data.test}

// (${data.github})

// ${data.email}`

//     console.log(readMeText)

// }

// function writeToFile () {

// }

function generateMarkdown(data) {
    return `# ${data.title}

## Title

${data.title}

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

#Contributions

${data.contributions}

## Data

${data.test}

## Github
(${data.github})

## Email
${data.email}`


}

fs.writeFile(data,(err) => err ? console.log(err) : console.log('Success!'));



module.exports = generateMarkdown;
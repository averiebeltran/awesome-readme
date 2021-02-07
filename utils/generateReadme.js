// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
	return `
<h1 align="center">${data.title}</h1>

![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/averiebeltran/awesome-readme?style=flat&logo=appveyor)
![Badge for GitHub last commit](https://img.shields.io/github/last-commit/averiebeltran/awesome-readme?style=flat&logo=appveyor)

![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Contact](#contact)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contibution}

## Tests
${data.tests}

## License
![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
<br />
This application by the ${data.license} license.

## Contact
:octocat: Find me on GitHub: [${data.username}](https://github.com/${data.username})
<br />
Email me with questions: ${data.email}
	`;
}

module.exports = generateMarkdown;

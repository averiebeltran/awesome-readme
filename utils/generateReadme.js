// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
	return `
		<h1 align="center">${data.title}</h1>

		## Table of Contents
		- [Description] (#description)
		- [Installation] (#installation)
		- [Usage] (#usage)
		- [Contributing] (#contributing)
		- [Tests] (#tests)
		- [License] (#license)
		- [Contact] (#contact)

		## Description
		${data.description}

		## Installation
		${data.installation}

		## Usage
		${data.usage}

		## Contributing
		${data.contibuting}

		## Tests
		${data.tests}

		## License
		${data.license}

		## Contact
		:octocat: Find me on GitHub: [${data.username}](https://github.com/${data.username})
		Email me with questions: ${data.email}
	`;
}

module.exports = generateMarkdown;

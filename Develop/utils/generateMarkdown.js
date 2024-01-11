// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let result = "";
  if(license == 'MIT'){
    result = 'License: MIT\nhttps://opensource.org/licenses/MIT';
  }
  else if (license == 'Mozilla'){
    result = 'License: MPL 2.0\nhttps://opensource.org/licenses/MPL-2.0';
  }
  else if (license == 'Eclipse'){
    result = 'License\nhttps://opensource.org/licenses/EPL-1.0';
  }
  else if (license == 'SIL'){
    result = 'License: Open Font-1.1\nhttps://opensource.org/licenses/OFL-1.1';
  }
  else {
    
  }
  return result;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return ` # README
  ## Description
  ${data.description}
  ## Table of contents
  
  ## Insallation
   ${data.installation}
  ## Usage
   ${data.usage}
  ## Credits
   ${data.credits}
  ## License
  ${renderLicenseSection(data.license)}
  ## Features
   ${data.features}

`;
}

module.exports = generateMarkdown;

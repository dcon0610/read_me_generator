const fs = require("fs");
const inquirer = require("inquirer");
const { stringify } = require("querystring");


// array of questions for user
const questions = ["Title", "Description", "Installation", "Usage", "License", "Contributing", "Tests", "Username", "Email",

];

function init (){
inquirer
  .prompt([
    {
      name: questions[0],
      message: questions[0],
      
    },
    {
      name: questions[1],
      message: questions[1],
    
    },
    {
        name: questions[2],
        message: questions[2],
      
      },
      {
        name: questions[3],
        message: questions[3],
      
      },
      {
        type: 'list', 
        name: questions[4],
        message: questions[4],
        choices: [
            'apache-2.0', 'Creative Commons license'
        ]
      
      },
      {
        name: questions[5],
        message: questions[5],
      
      },
      {
        name: questions[6],
        message: questions[6],
      
      },
    
      {
        name: `${questions[7]}`,
        message: questions[7],
      
      },
      {
        name: `${questions[8]}`,
        message: questions[8],
      
      },


  ])
  .then(answers => {

function writeToFile() {
  console.log(answers.License)
  const licenseCategory=[`apache-2.0`,`Creative Commons license`]
  console.log(licenseCategory[0])
  license=""
  if (answers.License==licenseCategory[0]) {

    license = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }

  else if (answers.License==licenseCategory[1]){

   license = `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]`
  }
  else {
  license="error"
  }
 
console.log(license)
    const data=`
# ${answers.Title}
${license}
- [Description](#Description)
- [Installation Requirements](#Installation-Requirements)
- [Usage Instructions](#Usage-Instructions)
- [License](#License)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)
  
## Description
${answers.Description}

## Installation Requirements
${answers.Installation}

## Usage Instructions
${answers.Usage}

## License
${answers.License}

## Contributing
${answers.Contributing}

## Tests
${answers.Tests}

## Questions
my Github Username is: ${answers.Username}
my email address is: ${answers.Email}
[Gihub Profile](https://github.com/+${answers.Username})

`
  
    
    fs.writeFile('newreadMe.md', data, function (err) {

        if (err) return console.log(err);
    }
    
    
    
    )
   
}
   


writeToFile()

    

  })

  .catch(function(err){
    console.log('there was an error '+ err);
    });

}
init()

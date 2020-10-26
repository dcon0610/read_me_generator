const fs = require("fs");
const inquirer = require("inquirer");


// array of questions for user
const questions = ["Title", "Description", "Installation", "Usage", "License", "Contributing", "Tests", "Questions",

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
            'GNU General Public License family', 'Microsoft Public License'
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


  ])
  .then(answers => {

function writeToFile() {


  console.log(answers.Title)

    const data=`
# ${answers.Title}
- [Description](https://github.com/dcon0610/read_me_generator/blob/main/Develop/newreadMe.md#description)
- [Installation Requirements](https://github.com/dcon0610/read_me_generator/blob/main/Develop/newreadMe.md#installation-requirements)
- [Usage Instructions](https://github.com/dcon0610/read_me_generator/blob/main/Develop/newreadMe.md#usage-instructions)
- [License](https://github.com/dcon0610/read_me_generator/blob/main/Develop/newreadMe.md#license)
- [Contributing](https://github.com/dcon0610/read_me_generator/blob/main/Develop/newreadMe.md#contributing)
- [Tests](https://github.com/dcon0610/read_me_generator/blob/main/Develop/newreadMe.md#tests)
- [Questions](#https://github.com/dcon0610/read_me_generator/blob/main/Develop/newreadMe.md#questions)
  
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
${answers.Questions}
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

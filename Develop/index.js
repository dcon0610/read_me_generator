const fs = require("fs");
const inquirer = require("inquirer");
const { listenerCount } = require("process");

// array of questions for user
const questions = ["Title:", "Description:", "Installation requirements:", "Usage instructions:", "License:", "contributing:", "Tests:", "Questions"

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
        name: questions[7],
        message: questions[7],
      
      },
    


  ])
  .then(answers => {
    console.log(`Answers:`, answers)
    ;
  });

}

console.log(answers)
// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program

// function call to initialize program
init();

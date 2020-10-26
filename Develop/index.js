const fs = require("fs");
const inquirer = require("inquirer");


// array of questions for user
const questions = ["Title", "Description", "Installation requirements", "Usage instructions", "License", "contributing", "Tests", "Questions",

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

    const data=`- [Heading](#heading)
  * [Sub-heading](#sub-heading)
    + [Sub-sub-heading](#sub-sub-heading)
- [Heading](#heading-1)
  * [Sub-heading](#sub-heading-1)
    + [Sub-sub-heading](#sub-sub-heading-1)
- [Heading](#heading-2)
  * [Sub-heading](#sub-heading-2)
    + [Sub-sub-heading](#sub-sub-heading-2)


# Heading levels

> This is a fixture to test heading levels

<!-- toc -->

## Heading

This is an h1 heading

### Sub-heading

This is an h2 heading

#### Sub-sub-heading

This is an h3 heading

## Heading

This is an h1 heading

### Sub-heading

This is an h2 heading

#### Sub-sub-heading

This is an h3 heading

## Heading

This is an h1 heading

### Sub-heading

This is an h2 heading

#### Sub-sub-heading

This is an h3 heading`
  
    
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
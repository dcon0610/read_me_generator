
# Unit 09 Node.js and ES6+ Homework: Good README Generator

This assignment used Node.js and two libraries: inquirer and fs to create an application which queried a number of questions on the command line and used the answers to those questions to produce a comprehensive and projfessional readMe file detailing the project.



## Installing the Application
To install:
> run npm install\
> run npm install inquirer\
> run npm install fs\
> run node index.js

## The Process
first, the two neccesary packages (inquirer and fs) were imported
then, an array called questions was initialised.
then, inquirer was used to prompt each of those questions from each of the elements of the array, and the answers were stored in an answers object. Most were input except for license, where two options were given. Then, the write to file function was initialised and an if statement decided which license to display based on the selection above.
A data string which contained strings embeded with string literals as per ES6 style was then composed, with the variables inside being all the answers to the above questions. This data was then written to the file. In case of an error, there was a catch statement at the end. 



## The Result
GIVEN a command-line application that accepts user input\
WHEN I am prompted for information about my application repository\
THEN a quality, professional README.md is generated with the title of your project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions\
WHEN I enter my project title\
THEN this is displayed as the title of the README\
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions\
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests\
WHEN I choose a license for my application from a list of options\
THEN a badge for that license is added hear the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under\
WHEN I enter my GitHub username\
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile\
WHEN I enter my email address\
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions\
WHEN I click on the links in the Table of Contents, it links to the relevant part of the document\
The new, generated readMe file is called newreadMe.md and is in the Develop folder.


## Notes
There are two screen castify videos. One shows the running of the application, and the other shows the generated readMe (called newreadMe.md) with the working Table of Contents linking to the required parts of the document. I also uploaded my link to my github repository where all of the files are, excluding the files in the gitignore (node modules and .DS_Store.


const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const path = require("path");

const renderDir = path.resolve(__dirname, "dist");
const renderPath = path.resolve(renderDir, "index.html");
const pageTemplate = require("./src/page-template");



let teamProfile = []



// array of questions for user
const InitializeTeam = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'ManagerName',
            message: "Please enter the Team Manager's name.",
            validate: MnameInput => {
                if (MnameInput) {
                    return true;
                } else {
                    console.log("Please enter the Team Manager's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'ManagerID',
            message: "Please enter the Team Manager's Employee ID.",
            validate: ManagerIDInput => {
                if (ManagerIDInput) {
                    return true;
                } else {
                    console.log("Please enter the Team Manager's Employee ID!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'ManagerEmail',
            message: "Please enter the Team Manager's Email Address.",
            validate: function(email) {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log(".  Please enter a valid email!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'ManagerOfficeNum',
            message: "Please enter the Team Manager's Office Number.",
            validate: ManagerOfficeNumInput => {
                if (ManagerOfficeNumInput) {
                    return true;
                } else {
                    console.log("Please enter the Team Manager's Office Number!");
                    return false;
                }
            }
        },

    ]).then(function(managerData) {
        
        createManager(managerData);
      
    })
}


const PromptCreateEmployee = () => {
    return inquirer.prompt([
                {
                    type: 'list',
                    name: 'EmployeeType',
                    message: "Would you like to enter one of the following employee types?",
                    choices: ["Engineer", "Intern", "No I'm all done!"]
                }]).then(answers => {
                    if(answers.EmployeeType==="No I'm all done!"){
                      renderHTML();
                      console.log("Your page has been generated! Congrats on building your first team!")
                    }else{
                        inquirer.prompt(employeeDetails).then(function(details){
                            if(answers.EmployeeType==="Engineer"){
                                inquirer.prompt(engineerQuestion).then(function(engineerAnswer){
                                    createEngineer(details, engineerAnswer.gitHub);
                                }).then(PromptCreateEmployee)
                            }else{
                                inquirer.prompt(internQuestion).then(function(internAnswer){
                                    createIntern(details, internAnswer.school);
                                }).then(PromptCreateEmployee)
                            }
                           
                        })
                    }
                })

}




const employeeDetails = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter employee name (required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter an employee ID (required)',
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('Please enter an ID!');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'email',
        message: 'Enter employee email address (required)',
        validate: function(email) {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
            if (valid) {
                return true;
            } else {
                console.log(".  Please enter a valid email!")
                return false;
            }
        }
    }]

const engineerQuestion = {
    type: 'input',
    name: 'gitHub',
    message: "Enter the engineer's Github profile name",
    validate: gitInput => {
        if (gitInput) {
            return true;
        } else {
            console.log('Please enter a Github profile name!');
            return false;
        }
    }
}

const internQuestion = {
    type: 'input',
    name: 'school',
    message: "Enter the name of the intern's school",
    validate: schoolInput => {
        if (schoolInput) {
            return true;
        } else {
            console.log('Please enter a school!');
            return false;
        }
    }
}


const createManager = managerData => {
    let { ManagerName, ManagerID, ManagerEmail, ManagerOfficeNum } = managerData;
    let newManager = new Manager(ManagerName, ManagerID, ManagerEmail, ManagerOfficeNum);
    teamProfile.push(newManager)
    console.log(teamProfile)
}

const createEngineer = function(details, gitHubname){
    let {name, id, email} = details;
    let newEngineer = new Engineer(name, id, email, gitHubname)
    teamProfile.push(newEngineer)
    console.log(teamProfile)
}

const createIntern = function(details, schoolName){
    let {name, id, email} = details;
    let newIntern = new Intern(name, id, email, schoolName)
    teamProfile.push(newIntern)
    console.log(teamProfile)
}

function renderHTML() {
    if(!fs.existsSync(renderDir)) {
        fs.mkdirSync(renderDir);
    }
    fs.writeFileSync(renderPath, pageTemplate(teamProfile), "utf-8");
};



InitializeTeam().then(PromptCreateEmployee);



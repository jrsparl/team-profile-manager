const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
//const Engineer = require('./lib/Engineer');
//const Intern = require('./lib/Intern');


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
            validate: ManagerEmailInput => {
                if (ManagerEmailInput) {
                    return true;
                } else {
                    console.log("Please enter the Team Manager's Email Address!");
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
        let { ManagerName, ManagerID, ManagerEmail, ManagerOfficeNum } = managerData;
        let newManager = new Manager(ManagerName, ManagerID, ManagerEmail, ManagerOfficeNum);
        teamProfile.push(newManager)
        console.log(teamProfile)
    })
}


const EmployeePrompts = () => {
    return inquirer.prompt([
    
        {
            type: 'list',
            name: 'EmployeeType',
            message: "Would you like to enter one of the following employee types?",
            choices: ["Engineer", "Intern", "No"]
        },

    {
        type: 'input',
        name: 'EmployeeName',
        message: "Please enter the team member's name.",
        validate: MnameInput => {
            if (MnameInput) {
                return true;
            } else {
                console.log("Please enter the team member's name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'EmployeeID',
        message: "Please enter the team member's Employee ID.",
        validate: ManagerIDInput => {
            if (ManagerIDInput) {
                return true;
            } else {
                console.log("Please enter the team member's Employee ID!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'EmployeeEmail',
        message: "Please enter the team member's Email Address.",
        validate: ManagerEmailInput => {
            if (ManagerEmailInput) {
                return true;
            } else {
                console.log("Please enter the team member's Email Address!");
                return false;
            }
        }
    },

    ])

}





InitializeTeam();

// const teamBuilder = teamData => {
//     console.log(`
//   =================
//   Fill In Your Team
//   =================
//   `);

//     // If there's no 'members' array property, create one
//     if (!teamData.members) {
//         teamData.members = [];
//     }
//     return inquirer
//         .prompt([
//             {
//                 type: 'list',
//                 name: 'roleChoice',
//                 message: 'Will you be entering either of the following?',
//                 choices: ["Intern", "Engineer", "No"]
//             },
//         ])
//         .then(function(memberData => {
//             teamData.members.push(memberData);
//             if (memberData.confirmAddMember) {
//                 return teamMemberSetup(teamData);
//             } else {
//                 return teamData;
//             }
//         });
// }; 
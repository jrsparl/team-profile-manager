const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
//const Engineer = require('./lib/Engineer');
//const Intern = require('./lib/Intern');


let teamProfile = []



// array of questions for user
const managerSetup = () => {
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
        let { name, id, email } = managerData;
        let newManager = new Manager(name, id, email, manager.officeNumber);
        teamProfile.push(newManager)
        console.log(teamProfile)
    })
}


managerSetup();

// const teamMemberSetup = teamData => {
//     console.log(`
//   =================
//   Fill In Your Team
//   =================
//   `);
  
//     // If there's no 'projects' array property, create one
//     if (!teamData.members) {
//       teamData.members = [];
//     }
//     return inquirer
//       .prompt([
//         {
//           type: 'input',
//           name: 'name',
//           message: 'What is the name of your project? (Required)',
//           validate: nameInput => {
//             if (nameInput) {
//               return true;
//             } else {
//               console.log('You need to enter a project name!');
//               return false;
//             }
//           }
//         },
//         {
//           type: 'input',
//           name: 'description',
//           message: 'Provide a description of the project (Required)',
//           validate: descriptionInput => {
//             if (descriptionInput) {
//               return true;
//             } else {
//               console.log('You need to enter a project description!');
//               return false;
//             }
//           }
//         },
//         {
//           type: 'checkbox',
//           name: 'languages',
//           message: 'What did you this project with? (Check all that apply)',
//           choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
//         },
//         {
//           type: 'input',
//           name: 'link',
//           message: 'Enter the GitHub link to your project. (Required)',
//           validate: linkInput => {
//             if (linkInput) {
//               return true;
//             } else {
//               console.log('You need to enter a project GitHub link!');
//               return false;
//             }
//           }
//         },
//         {
//           type: 'confirm',
//           name: 'feature',
//           message: 'Would you like to feature this project?',
//           default: false
//         },
//         {
//           type: 'confirm',
//           name: 'confirmAddProject',
//           message: 'Would you like to enter another project?',
//           default: false
//         }
//       ])
//       .then(memberData => {
//         teamData.members.push(memberData);
//         if (memberData.confirmAddMember) {
//           return teamMemberSetup(teamData);
//         } else {
//           return teamData;
//         }
//       });
//   }; 
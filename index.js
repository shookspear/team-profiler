const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "index.html");

const render = require("./lib/htmlRenderer");

const teamMembers = [];
const emptyId = [];

const dataEmployee = [
    {
        type: "input",
        name: "nameManager",
        message: "Manager's Name:"
    },
    {
        type: "input",
        name: "managerId",
        message: "Manager ID:"
    },
    {
        type: "input",
        name: "emailManager",
        message: "Manager's Email Address:"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Manager's Office Number:"
    }
];


function managerPrompt() {
    console.log("Building Team...");
    inquirer.prompt(dataEmployee).then(function(data){
        const manager = new Manager(data.nameManager, data.managerId, data.emailManager, data.officeNumber);
        teamMembers.push(manager);
        emptyId.push(data.managerId);
        teamPrompt();
    });
};

function teamPrompt() {
    inquirer.prompt([
        {
            type: "list",
            name: "memberChoice",
            message: "Which type of member would you like to add?",
            choices: [
                "Engineer",
                "Intern",
                "I'm finished adding Team Members"
            ]
        }
    ]).then(function(data){
        if (data.memberChoice === "Engineer"){
            engineerPrompt();
        } else if (data.memberChoice === "Intern"){
            internPrompt();
        } else (outputTeam());
    });
};

function engineerPrompt() {
    inquirer.prompt([
        {
            type: "input",
            name:"engineerName",
            message: "Engineer's Name:"
        },
        {
            type: "input",
            name:"engineerId",
            message: "Engineer's ID:"
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "Engineer's Email:"
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "Engineer's GitHub Username:"
        }
    ]). then(function(data){
        const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub);
        teamMembers.push(engineer);
        emptyId.push(data.engineerId);
        teamPrompt();
    });
};

function internPrompt() {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "Intern's Name:"
        },
        {
            type: "input",
            name: "internId",
            message: "Intern's ID:"
        },
        {
            type: "input",
            name: "internEmail",
            message: "Intern's Email:"
        },
        {
            type: "input",
            name: "internSchool",
            message: "Intern's School:"
        }
    ]). then(function(data){
        const intern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool);
        teamMembers.push(intern);
        emptyId.push(data.internId);
        teamPrompt();
    });
};

function outputTeam() {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
}

managerPrompt();
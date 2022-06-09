
const { Project } = require('../models');

const projectData = 
[{
    "id": 1,
    "user_id": 1,
    "title": "upSTARTER",
    "description": "Send this basic application to the moon!",
    "fund_needed": 1000000,
    "donation_total": 500000,
    "created_at": "06/09/2022"
},
{
    "id": 2,
    "user_id": 2,
    "title": "Usurp Jeff Bezos",
    "description": "E-commerce concept owned by it's workers.",
    "fund_needed": 1000,
    "donation_total": 900,
    "created_at": "06/09/2022"
},
{
    "id": 3,
    "user_id": 3,
    "title": "Phasebook",
    "description": "Social media platform for people going through a phase.",
    "fund_needed": 123456789,
    "donation_total": 23456789,
    "created_at": "06/09/2022"
},
{
    "id": 4,
    "user_id": 4,
    "title": "Example1",
    "description": "Example Example Example1.",
    "fund_needed": 50000,
    "donation_total": 2000,
    "created_at": "06/09/2022"
}]

const seedProjects = () => Project.bulkCreate(projectData);

module.exports = seedProjects;
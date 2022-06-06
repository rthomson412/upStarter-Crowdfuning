
const { Project } = require('../models');

const projectData = 
[{
    "id": 1,
    "user_id": 1,
    "title": "upSTARTER",
    "description": "Send this basic application to the moon!",
    "fund_needed": 1000000,
    "donation_total": 10,
    "created_at": "06/06/2022"
},
{
    "id": 2,
    "user_id": 2,
    "title": "EXAMPLE",
    "description": "Example Example Example.",
    "fund_needed": 1000,
    "donation_total": 900,
    "created_at": "06/06/2022"
},
{
    "id": 3,
    "user_id": 3,
    "title": "Phasebook",
    "description": "Social media platform for people going through a phase.",
    "fund_needed": 123456789,
    "donation_total": 23456789,
    "created_at": "06/06/2022"
}]

const seedProjects = () => Project.bulkCreate(projectData);

module.exports = seedProjects;
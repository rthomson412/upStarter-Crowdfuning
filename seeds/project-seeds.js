const { Project } = require('../models');

const projectData = 
[{
    "id": 1,
    "title": "Test project for testing",
    "description": "A test description for a test description",
    "collaborators_required": "Testers for testing",
    "fund_needed": 1000,
    "donation_total": 0,
    "created_at": "06/01/2022"
}]

const seedProjects = () => Project.bulkCreate(projectData);

module.exports = seedProjects;
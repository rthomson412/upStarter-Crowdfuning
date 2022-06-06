const seedUsers = require('./user-seeds');
const seedProjects = require('./project-seeds');
const seedDonations = require('./donation-seeds')
const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedProjects();
  console.log('\n----- PROJECTS SEEDED -----\n');

  await seedDonations();
  console.log('\n----- DONATIONS SEEDED -----\n');

  process.exit(0);
};

seedAll();
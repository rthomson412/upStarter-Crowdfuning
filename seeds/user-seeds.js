const { User } = require('../models');

const userData = [
    {
      id: 1,
      name: "Marcel",
      email: "marcel@email.com",
      password: "pass1234",
    },
    {
      id: 2,
      name: "Andre",
      email: "andre@email.com",
      password: "pass1234",
    },
  ];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
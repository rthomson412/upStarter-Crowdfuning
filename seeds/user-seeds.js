const { User } = require('../models');

const userData = [
    {
        "id": 1,
        "name": "Andre Breton" ,
        "email": "andre@email.com",
        "password": "1234pass"
    },
    {
        "id": 2,
        "name": "Marcel Duchamp" ,
        "email": "marcel@email.com",
        "password": "1234pass"
    },
    {
        "id": 3,
        "name": "Kay Sage" ,
        "email": "kay@email.com",
        "password": "1234pass"
    }
  ];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
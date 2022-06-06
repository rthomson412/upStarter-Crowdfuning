[
    {
        "id": 1,
        "user_id": 2,
        "project_id": 1,
        "amount": 20
    },
    {
        "id": 2,
        "user_id": 3,
        "project_id": 2,
        "amount": 40
    },
    {
        "id": 3,
        "user_id": 1,
        "project_id": 3,
        "amount": 30
    }
]

const { Donation } = require('../models');

const donationData = [ {
    "id": 1,
    "user_id": 2,
    "project_id": 1,
    "amount": 20
},
{
    "id": 2,
    "user_id": 3,
    "project_id": 2,
    "amount": 40
},
{
    "id": 3,
    "user_id": 1,
    "project_id": 3,
    "amount": 30
}];

const seedDonations = () => Donation.bulkCreate(donationData);

module.exports = seedDonations;
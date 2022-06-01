const { Donation } = require('../models');

const donationData = [{
    "id": 1,
    "user_id": 2,
    "project_id": 1,
    "amount": 100
}];

const seedDonations = () => Donation.bulkCreate(donationData);

module.exports = seedDonations;
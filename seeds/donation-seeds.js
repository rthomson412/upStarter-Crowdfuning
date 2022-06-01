const { Donation } = require('../models');

const donationData = [];

const seedDonations = () => Donation.bulkCreate(donationData);

module.exports = seedDonations;
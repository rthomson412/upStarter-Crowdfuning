const { Comment } = require('../models');

const commentData = [];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
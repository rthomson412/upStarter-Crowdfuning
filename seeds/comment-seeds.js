const { Comment } = require('../models');

const commentData = [
    {
      id: 1,
      comment_text: "Test comment."
    },
  ];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
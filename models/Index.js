const User = require("./User");
const Project = require("./Project");
const Comment = require("./Comment");
const Donation = require("./Donation");

//Relationships between models

// User to Project
User.hasMany(Project, {
  foreignKey: "user_id",
});
// Project to User
Project.belongsTo(User, {
});
// Post to Comment
Project.hasMany(Comment, {
  foreignKey: "project_id",
  onDelete: "CASCADE",
});
// Comment to User
Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
// Comment to Project
Comment.belongsTo(Project, {
  foreignKey: "project_id",
  onDelete: "CASCADE",
});
// Donation to User
Donation.belongsTo(User, {
  foreignKey: "user_id",
});
// Donation to project
Donation.belongsTo(Project, {
  foreignKey: "project_id",
});
// User to Donation
User.hasMany(Donation, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
// Project to Donation
Project.hasMany(Donation, {
  foreignKey: "project_id",
  onDelete: "CASCADE",
});

module.exports = { User, Project, Comment, Donation };

const User = require("./User");
const Project = require("./Project");
const Comment = require("./Comment");
const Donations = require("./Donation");

//Relationships between models

// User to Project
User.hasMany(Project, {
  foreignKey: "user_id",
});
// Project to User
Project.belongsTo(User, {
  foreignKey: "user_id",
});
// Post to Comment
Project.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});
// Comment to User
Comment.belongsTo(User, {
  foreignKey: "user_id",
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
  onDelete: "cascade",
});
// Project to Donation
Project.hasMany(Donation, {
  foreignKey: "project_id",
  onDelete: "cascade",
});

module.exports = { User, Project, Comment, Donation };

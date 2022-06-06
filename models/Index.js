const User = require('./User');
const Project = require('./Project');
const Donation = require('./Donation');

User.hasMany(Project, {
  foreignKey: 'user_id'
});
Project.belongsTo(User, {
  foreignKey: 'user_id'
});
Donation.belongsTo(User, {
  foreignKey: 'user_id',
});
Donation.belongsTo(Project, {
  foreignKey: 'project_id',
});
User.hasMany(Donation, {
  foreignKey: 'user_id',
  onDelete: 'cascade',
});
Project.hasMany(Donation, {
  foreignKey: 'project_id',
  onDelete: 'cascade',
})

module.exports = { User, Project, Donation };
const User = require('./User');
const Quest = require('./Quest');
// Define sequelize associations in this file.
User.hasMany(Quest, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Quest.belongsTo(User, {
    foreignKey: 'user_id'
});



module.exports = { User, Quest };

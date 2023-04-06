const User = require('./User');
const Quest = require('./Quest');
// Define sequelize associations in this file.
User.hasMany(Quest, {
    foreignKey: 'id',
    onDelete: 'CASCADE'
});

Quest.belongsTo(User, {
primary_key: 'user_id',
});



module.exports = { User, Quest };

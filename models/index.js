const User = require('./User');

// Define sequelize associations in this file.
<<<<<<< HEAD
User.hasMany(Quest, {
    foreignKey: 'id',
    onDelete: 'CASCADE'
});

Quest.belongsTo(User, {
primary_key: 'user_id',
});



module.exports = { User, Quest };
=======

module.exports = { User };
>>>>>>> ca644e01b26c997a142ec5c445b92ca3db5f58e1

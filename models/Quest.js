const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Quest extends Model {}

Quest.init(
    {
        userid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        quest_title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        quest_setting: {
            type: DataTypes.STRING,
            allowNull: false
        },
        quest_challenge: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        quest_text: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'Quest',
    }
);

module.exports = Quest;
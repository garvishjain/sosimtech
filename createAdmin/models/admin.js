const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const admin = sequelize.define('admin',{
    UserName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = admin;
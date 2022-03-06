const Sequelize = require('sequelize');

const sequelize = require('../database');

const user = sequelize.define('test', {
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    image: {
        type: Sequelize.STRING
    }
});

module.exports = user;
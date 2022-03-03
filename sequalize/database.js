
const Sequelize = require('sequelize');

const sequelize = new Sequelize('demo', 'root', '', { dialect: 'mysql', host: 'localhost' });

module.exports = sequelize;

/* const user = sequelize.define({
    firstName: {
        type: Sequelize.STRING,
        field: 'first_name'
    },
    lastName: {
        type: Sequelize.STRING
    }
})

module.exports = user; */
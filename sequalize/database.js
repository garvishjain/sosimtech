
const Sequelize = require('sequelize');

const sequelize = new Sequelize('demo', 'root', '', {
    dialect: 'mysql', host: 'localhost', define: {
        freezeTableName: true
    }
});

sequelize.sync();
module.exports = sequelize;


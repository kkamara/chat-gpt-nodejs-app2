const { Sequelize } = require('sequelize');
const config = require('../config');

async function database() {
    const db = new Sequelize(config.databaseURL, {});

    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');

        return db;
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        throw error;
    }
}

module.exports = database;

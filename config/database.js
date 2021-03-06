const Sequelize = require('sequelize');
const path = require('path');

const connection = require('./connection');

let database;

switch (process.env.NODE_ENV) {
  case 'production':
    database = new Sequelize(
      connection.production.database,
      connection.production.username,
      connection.production.password, {
        host: connection.production.host,
        dialect: connection.production.dialect,
        pool: {
          max: 5,
          min: 0,
          idle: 10000,
        },
      },
    );
    break;
    case 'staging':
    database = new Sequelize(
      connection.staging.database,
      connection.staging.username,
      connection.staging.password, {
        host: connection.staging.host,
        dialect: connection.staging.dialect,
        pool: {
          max: 5,
          min: 0,
          idle: 10000,
        },
      },
    );
    break;
  default:
    database = new Sequelize(
      connection.development.database,
      connection.development.username,
      connection.development.password, {
        host: connection.development.host,
        dialect: connection.development.dialect,
        pool: {
          max: 5,
          min: 0,
          idle: 10000,
        },
        storage: path.join(process.cwd(), 'db', 'database.sqlite'),
      },
    );
}

module.exports = database;

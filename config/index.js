const Routes = require('./routes');

const config = {
  migrate: true,
  Routes,
  port: process.env.PORT || '8080',
};

module.exports = config;

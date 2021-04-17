const development = {
    database: 'cyrella',
    username: 'root',
    password: 'root',
    host: 'mysql://localhost:3306',
    dialect:  'mysql',
  };
  
  const staging  = {
    database: 'heroku_99af5c910be67bf',
    username: 'b1fee8743c2a1c',
    password: '38580e63',
    host: 'us-cdbr-east-03.cleardb.com',
    dialect:  'mysql',
  };
  
  const production = {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
  };
  
  module.exports = {
    development,
    staging,
    production,
  };
  
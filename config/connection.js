const development = {
    database: 'cyrella',
    username: 'root',
    password: 'root',
    host: 'mysql://localhost:3306',
    dialect:  'mysql',
  };
  
  const staging  = {
    database: 'heroku_7bcceb62a555e5a',
    username: 'bd695e9974656f',
    password: '0d9fa16a',
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
  
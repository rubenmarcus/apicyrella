const development = {
    database: 'cyrella',
    username: 'root',
    password: 'root',
    host: 'localhost',
    dialect:  'mysql',
  };
  
  const staging  = {
    database: 'y4u9l4omglanv78v',
    username: 'u130kmua9v7h5zy6',
    password: 't8oog83ojp70r6yu',
    host: 'vkh7buea61avxg07.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
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
  
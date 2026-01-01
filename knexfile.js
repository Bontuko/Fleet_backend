// knexfile.js
require('dotenv').config();

module.exports = {
  development: {
    client: 'mysql2',
    connection: process.env.DATABASE_URL || 'mysql://root:AJpJLNlqqcXhiVYPhTCmKdeMhEXKZFmw@switchback.proxy.rlwy.net:33335/railway',
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    },
    pool: {
      min: 2,
      max: 10,
    },
  },
};

const dotenv = require('dotenv');

dotenv.config();

 const APP_SECRET_KEY = process.env.APP_SECRET_KEY
 const APP_DB_NAME = process.env.APP_DB_NAME
 const APP_DB_USER_NAME = process.env.APP_DB_USER_NAME
 const APP_DB_PORT = process.env.APP_DB_PORT
 const APP_DB_PASSWORD = process.env.APP_DB_PASSWORD

 const DB_URI = `postgres://${APP_DB_USER_NAME}:${APP_DB_PASSWORD}@localhost:${parseInt(APP_DB_PORT)}/${APP_DB_NAME}`

module.exports = { APP_SECRET_KEY, DB_URI};
const pgp = require('pg-promise')({promiseLib: Promise});
const database = require('../config/index').DB;
module.exports = pgp(database);
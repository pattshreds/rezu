const Pool = require('pg').Pool

const pool = new Pool ({
  host: 'localhost',
  database: 'rezu',
  port: 5432
});

module.exports = pool

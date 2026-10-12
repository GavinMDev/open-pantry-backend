const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "lifeondrive98",
    host: "192.168.1.48",
    port: 5432,
    database: "openpantry"
});

module.exports = pool;
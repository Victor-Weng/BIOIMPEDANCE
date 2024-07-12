const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "12345678", // password to postgres
    host: "localhost",
    port: 5432, // standard postgres port
    database: "bioimpedance"
});

module.exports = pool;
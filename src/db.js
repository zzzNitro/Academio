const Pool = require("pg").Pool;

/*
DB
DB_USER
DB_PASS
DB_HOST
DB_PORT

(need to add unique constraint to username)
*/

const pool = new Pool({
    user: "postgres",
    password: "1581",
    host: "localhost",
    port: 5432,
    database: "academio"
});

module.exports = pool;
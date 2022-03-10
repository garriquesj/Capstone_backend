const Pool = require ("pg").Pool
// Pure JavaScript client and native libpq bindings share the same API
// Connection pooling
// Extensible JS ↔ PostgreSQL data-type coercion
// Supported PostgreSQL features
// Parameterized queries
// Named statements with query plan caching
// Async notifications with LISTEN/NOTIFY
// Bulk import & export with COPY TO/COPY FROM
const pool = new Pool({
    user : "jay",
    password: "jay",
    host: "localhost",
    port: 1000,
    database: "capstone"
});
module.exports = pool;
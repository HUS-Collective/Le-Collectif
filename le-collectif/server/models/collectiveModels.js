const { Pool } = require("pg");

const PG_URI =
  "postgres://fgyqbych:KnLvBJGCZMpNzf3MypSAqpYpGNc7OCUT@peanut.db.elephantsql.com/fgyqbych";

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  // text will be the SQL string
  query: (text, params, callback) => {
    // console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};

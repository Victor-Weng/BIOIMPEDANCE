const { Pool } = require('pg')
require('dotenv').config()

const pool = new Pool({
  connectionString: `${process.env.REACT_APP_URL}`,
})

pool.on('error', (err) => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1);
  });
  
  pool.connect((err, client, done) => {
    if (err) {
      console.error('Error connecting to the database', err);
    } else {
      console.log('Connected to the PostgreSQL database');
      done(); // release the client back to the pool.
    }
  });

module.exports = pool;
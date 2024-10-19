const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: 'postgres://postgres:Megababy1!@localhost:5432/ads',
});

async function testConnection() {
  try {
    const res = await pool.query('SELECT NOW()');
    console.log('Connected to database:', res.rows[0]);
  } catch (err) {
    console.error('Connection error', err.stack);
  } finally {
    await pool.end();
  }
}

testConnection();

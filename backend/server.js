const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// PostgreSQL pool setup using DATABASE_URL
const pool = new Pool({
  connectionString: 'postgres://postgres:Megababy1!@localhost:5432/ads',
});

// Route to get ads
app.get('/api/ads', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM ads');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching ads:', error);
    res.status(500).json({ message: 'Error fetching ads' });
  }
});

// Route to post a new ad
app.post('/api/ads', async (req, res) => {
  const { title, description, price, discountCode } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO ads (title, description, price, discount_code) VALUES ($1, $2, $3, $4) RETURNING *',
      [title, description, price, discountCode]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error saving ad to database:', error);
    res.status(500).json({ message: 'Error saving ad to database' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

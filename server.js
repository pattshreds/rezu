const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

//============
// Middleware
//============

app.use(cors());
app.use(express.json());

//============
// Routes
//============

// Get all

app.get('/reviews', async (req, res) => {
    try {
        const allRevs = await pool.query('SELECT * FROM reviews');
        res.json(allRevs.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// Get one

app.get('/reviews/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const review = await pool.query(
            'SELECT * FROM reviews WHERE review_id = $1',
            [id]
        );
        res.json(review.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// Create

app.post('/reviews', async (req, res) => {
    try {
        const { username, product_name, product_image, review } = req.body;
        const newReview = await pool.query(
            'INSERT INTO reviews (username, product_name, product_image, review) VALUES ($1, $2, $3, $4) RETURNING *',
            [username, product_name, product_image, review]
        );
        res.json(newReview.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// Update

app.put('/reviews/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { username, product_name, product_image, review } = req.body;
        const updatedRev = await pool.query(
            'UPDATE reviews SET username = $1, product_name = $2, product_image = $3, review = $4 WHERE review_id = $5 RETURNING username, product_name, product_image, review',
            [username, product_name, product_image, review, id]
        );
        res.json(updatedRev.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// Delete

app.delete('/reviews/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleteRev = await pool.query(
            'DELETE FROM reviews WHERE review_id = $1',
            [id]
        );
        res.json('Review was deleted');
    } catch (err) {
        console.error(err.message);
    }
});

//============
// Listener
//============

app.listen(3000, () => {
    console.log('listening on port 3000');
});

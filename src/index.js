// IMPORTS
const express = require('express');
const cors = require('cors');

// INITALIZE EXPRESS
const app = express();

// ENVIRONMENT VARIABLES
const PORT = 3000;
const HOST = '0.0.0.0';

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// DATABASE
const pool = require('./database/db');

// ROUTING VARIABLES
const searchRoute = require('./routes/search.route');
const dashboardRoute = require('./routes/dashboard.route');
const itemsRoute = require('./routes/items.route');
const locationsRoute = require('./routes/locations.route');

// Enable JSON parsing middleware (allows handling JSON request bodies)
app.use(express.json());
// Routes

    // Search
    app.post('/api/v1/search', async(req, res) =>{
        try {
            const { item_name }  = req.body;
            const newItem = await pool.query("INSERT INTO items (item_name) VALUES($1) RETURNING *", 
                [item_name]
            );
            res.json(newItem.rows[0]);
        } catch (err) {
            console.error(err.message);
        }
    })

    // Dashboard
    app.use('/api/v1/dashboard', dashboardRoute)

    // Items
    app.use('/api/v1/items', itemsRoute)

    // Locations
    app.use('/api/v1/locations', locationsRoute)

// SERVER INITIALIZATION
    app.listen(PORT, HOST, () => {
        console.log(`Server is running at http://${HOST}:${PORT}`);
    });

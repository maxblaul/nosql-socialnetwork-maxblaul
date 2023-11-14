const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');
// Environment variables
const PORT = process.env.PORT || 3001;
const app = express();
// Middleware to parse incoming data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Use defined routes
app.use(routes);
// Connect MongoDB and start server
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    });
});

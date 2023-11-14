// Import mongoose library
const mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/',
{
    userNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = mongoose.connection;
// Import mongoose library
const mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://blaulmax:password123!@cluster0.ga4cgy2.mongodb.net/?retryWrites=true&w=majority')

module.exports = mongoose.connection;
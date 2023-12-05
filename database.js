// Import the mongoose library for MongoDB connection
const mongoose = require('mongoose');
// Define the MongoDB connection string with credentials and database name
const databaseString = "mongodb+srv://hamzakh:hamzakh@cluster0.lxixhhk.mongodb.net/Project0?retryWrites=true&w=majority";
// Export a function that establishes a connection to the MongoDB database
module.exports = () => mongoose.connect(databaseString, { useNewUrlParser: true, useUnifiedTopology: true }, err => {
    // Check for connection errors
    if (err) {
        console.log(err);
        return;
    }
    // Log a success message when the database connection is established
    console.log("Database is connected successfully");
});

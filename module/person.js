// Import the mongoose library for MongoDB schema and model creation
const mongoose = require("mongoose");
// Define the schema for the 'Person' model
const PersonSchema = mongoose.Schema({
    // Define a 'name' field with a String type that is required
    name: {
        type: String,
        required: true
    },
    // Define an 'age' field with a Number type
    age: {
        type: Number,
    },
    // Define a 'favoriteFood' field with an array of Strings type
    favoriteFood: {
        type: [String]
    }
});
// Export the mongoose model for the 'Person' schema
module.exports = mongoose.model("Person", PersonSchema);

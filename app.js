// Import required modules
const express = require("express");
const mongoose = require("mongoose");
// Create an instance of the Express application
const myapp = express();
// Middleware to parse incoming JSON requests
myapp.use(express.json());
// Route handling: Use the router defined in the specified file for "/api" endpoint
myapp.use("/api", require("./routers/router"));
// Connect to MongoDB database
mongoose
  .connect("mongodb+srv://hamzakh:hamzakh@cluster0.lxixhhk.mongodb.net/Project0?retryWrites=true&w=majority")
  .then(() => console.log("Database connected"))
  .catch((err) => console.error(err));
// Set the port for the server to listen on
const PORT = 5000;
// Start the server and listen on the specified port
myapp.listen(PORT, () => console.log("Server is running on port", PORT));

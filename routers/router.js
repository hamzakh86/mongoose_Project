// Import necessary modules
const express = require('express');
const router = express.Router();
const PersonModel = require('../module/person');
// Route to handle POST requests for creating a new person
router.post('/', (req, res) => {
    // Create a new PersonModel instance with data from the request body
    const person = new PersonModel(req.body);
    // Save the person to the database
    person.save()
        .then(docs => {
            console.log(docs);
            res.send(docs);
        })
        .catch(err => {
            console.log(err);
            // If an error occurs, send a 500 status and the error message
            res.status(500).send(err);
        });
});

// Route to find persons by name using POST request
router.post('/personName', (req, res) => {
    // Find persons in the database with the specified name
    PersonModel
        .find({ name: req.body.name })
        .then(docs => {
            console.log(docs);
            res.send(docs);
        })
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
        });
});

// Route to find a person by favorite food using POST request
router.post('/food', (req, res) => {
    // Find a person in the database with the specified favorite food
    PersonModel
        .findOne({ favoriteFood: req.body.favoriteFood })
        .then(docs => {
            console.log(docs);
            res.send(docs);
        })
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
        });
});
// Route to find a person by ID using POST request
router.post('/:id', (req, res) => {
    // Find a person in the database by ID
    PersonModel
        .findById({ _id: req.params.id })
        .then(docs => {
            console.log(docs);
            res.send(docs);
        })
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
        });
});
// Route to update a person by ID using PUT request
router.put('/update/:id', (req, res) => {
    // Find and update a person in the database by ID
    PersonModel
        .findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        .then(docs => {
            console.log(docs);
            res.send(docs);
        })
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
        });
});

// Route to remove a person by ID using DELETE request
router.delete('/remove/:id', (req, res) => {
    // Find and remove a person in the database by ID
    PersonModel
        .findByIdAndRemove({ _id: req.params.id })
        .then(docs => {
            console.log(docs);
            res.send(docs);
        })
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
        });
});

// Export the router for use in other files
module.exports = router;

// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use express as middle-ware.
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Cors for cross origin allowance
const cors = require('cors');
// Connect app to package
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server

const port = 3000;

app.listen(port, () => {
    console.log('server running');
    console.log(`running on localhost: ${port}`);
});

// GET Function
app.get('/get', (req, res) => {
    // To get projectData object
    res.send(projectData);
    console.log(projectData);
});

app.get('/all', (req, res) => {
    // To return projectData object
    res.send(projectData);
    console.log(projectData);
});

// POST Function
app.post('/add', (req, res) => {
    newEntry = {
        temp: req.body.temp,
        date: req.body.date,
        content: req.body.content,
        feelings:req.body.feelings
    }
    projectData = newEntry
    console.log(projectData)
    res.send(projectData)
});
// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
import express, { static } from 'express';
import { urlencoded, json } from 'body-parser';

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(urlencoded({ extended: false }));
app.use(json());

// Cors for cross origin allowance
import cors from 'cors';
app.use(cors());

// Initialize the main project folder
app.use(static('website'));

// POST
app.post('/add', addInfo)
function addInfo(req, res) {
    projectData ['date'] = req.body.date;
    projectData ['content'] = req.body.content;
    projectData ['temp'] = req.body.temp;
    req.send('projectData');
}

// GET
app.get('/all', getInfo);
function getInfo(req, res) {
    res.send('projectData');
}

// Setup Server
const port = 3000;
const server = app.listen(port, listening);
function listening() {
    console.log(`running on localhost: ${port}`);
}